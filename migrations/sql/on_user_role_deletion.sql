create trigger on_user_role_deletion
    before delete
    on user_role
    for each row
    execute procedure check_if_user_is_owner();