create or replace function check_role_duplication()
    returns trigger as
$$
begin
    if exists (
        SELECT user_role.id
        FROM user_role
        JOIN role ON user_role.role = role.id AND role.company = (
            SELECT r2.company
            FROM role r2
            WHERE r2.id = NEW.role
        )
        WHERE user_role.user = NEW.user
    ) then
        raise 'User is not allowed to have multiple roles in a company';
        return null;
    end if;
    return new;
end
$$ language plpgsql;