create or replace function check_if_user_is_owner()
    returns trigger as
$$
begin
    if exists (
        SELECT company.id
        FROM user_role
        JOIN role ON user_role.role = role.id
        JOIN company ON company.id = role.company
        WHERE user_role.user = OLD.user AND company.owner = OLD.user
    ) then
        raise 'Can not delete the company owner';
        return null;
    end if;
    return OLD;
end
$$ language plpgsql;