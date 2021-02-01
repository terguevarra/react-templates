import ShortUniqueId from 'short-unique-id';

const ShortGuid = () => {
    const uid = new ShortUniqueId();
    return uid();
}

export default ShortGuid;