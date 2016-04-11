create or replace function terminate_current_plan()
    returns trigger as
$$
begin

    UPDATE company_plan
    SET company_plan.expiration = now()
    WHERE
        company_plan.company = NEW.company
        AND company_plan.expiration > now();

    return NEW;
end
$$ language plpgsql;