import NodeCache from "node-cache";

const cache = new NodeCache({ stdTTL: 86400 }); // TTL = 86400 секунд (1 день)

export default cache;
