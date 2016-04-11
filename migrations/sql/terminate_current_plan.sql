create or replace function terminate_current_plan()
    returns trigger as
$$
begin

    UPDATE company_plan
    SET expiration = now()
    WHERE
        company = NEW.company
        AND expiration > now();

    return NEW;
end
$$ language plpgsql;