create trigger on_user_email_deletion
    after insert
    on user_email
    for each row
    execute procedure invite_to_user_role();