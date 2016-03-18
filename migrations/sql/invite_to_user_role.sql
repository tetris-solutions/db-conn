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

    DELETE FROM "invite" WHERE "invite"."email" = NEW.id;

    return NEW;
end
$$ language plpgsql;