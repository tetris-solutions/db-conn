create or replace function switch_plans()
    returns trigger as
$$
declare
    adminRole UUID;
begin
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- expire old plan
    UPDATE company_plan
    SET expiration = now()
    WHERE
        company = NEW.company
        AND expiration > now();

-- delete potentially expired permissions
    DELETE
    FROM role_permission
    WHERE role_permission.id IN (
        SELECT role_permission.id
        FROM role
        INNER JOIN role_permission ON role_permission.role = role.id
        INNER JOIN permission ON permission.id = role_permission.permission
        WHERE
            role.company = NEW.company
            AND permission.platform IS NOT NULL
    );

-- search admin role
    SELECT role.id
    INTO adminRole
    FROM role
    WHERE role.company = NEW.company
    ORDER BY role.creation
    LIMIT 1;

-- enable new permissions to admin
    INSERT INTO role_permission ("id", "role", "permission")
    SELECT
        uuid_generate_v4() AS "id",
        adminRole,
        plan_permission.permission
    FROM plan_permission
    WHERE plan_permission.plan = NEW.plan;

    return NEW;
end
$$ language plpgsql;