create or replace function check_if_user_is_owner()
    returns trigger as
$$
begin
    if exists (
        SELECT company.id
        FROM role
        JOIN company ON company.id = role.company
        WHERE role.id = OLD.role AND company.owner = OLD.user
    ) then
        raise 'Cannot delete the company owner';
        return null;
    end if;
    return OLD;
end
$$ language plpgsql;