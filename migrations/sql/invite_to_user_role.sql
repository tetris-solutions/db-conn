create or replace function invite_to_user_role()
    returns trigger as
$$
begin
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


    INSERT INTO user_role ("id", "user", "role")
    SELECT
        uuid_generate_v4() AS "id",
        user_email."user",
        invite."role"
    FROM user_email
    JOIN invite ON "invite"."email" = NEW.id
    WHERE
        "user_email"."id" = NEW.id
        AND NOT EXISTS (
            SELECT ur."id"
            FROM user_role ur
            WHERE
                ur."role" = "invite"."role"
                AND ur."user" = "user_email"."user"
        );

    INSERT INTO company_user ("id", "company", "user")
    SELECT
        uuid_generate_v4() AS "id",
        company."id",
        user_email."user"
    FROM user_email
    JOIN invite ON "invite"."email" = NEW.id
    JOIN role on "role"."id" = "invite"."role"
    JOIN company ON "company"."id" = "role"."company" 
    WHERE
        "user_email"."id" = NEW.id
        AND NOT EXISTS (
            SELECT co."id"
            FROM company_user co
            WHERE
                co."company" = "company"."id"
                AND co."user" = "user_email"."user"
        );

    DELETE FROM "invite" WHERE "invite"."email" = NEW.id;

    return NEW;
end
$$ language plpgsql;