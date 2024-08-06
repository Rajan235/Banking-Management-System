CREATE OR REPLACE FUNCTION update_account_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_account_timestamp
BEFORE UPDATE ON Accounts
FOR EACH ROW
EXECUTE FUNCTION update_account_timestamp();
