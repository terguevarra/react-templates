const IsJson = (item : any) => {
    try{
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;

        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }

        if (typeof item === "object" && item !== null) {
            return true;
        }

        return false;
    } catch (e) {
        return false;
    }
    
}

export default IsJson;