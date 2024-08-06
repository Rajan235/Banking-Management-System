CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_customer_timestamp
BEFORE UPDATE ON Customers
FOR EACH ROW
EXECUTE PROCEDURE update_timestamp();
