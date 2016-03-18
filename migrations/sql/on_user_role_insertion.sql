create trigger on_user_role_insertion
    before insert
    on user_role
    for each row
    execute procedure check_role_duplication();