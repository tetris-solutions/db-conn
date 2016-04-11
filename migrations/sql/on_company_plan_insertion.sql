create trigger on_company_plan_insertion
  before insert
  on company_plan
  for each row
  execute procedure terminate_current_plan();