import { UriAccessorFactory } from "@ilb/uriaccessorjs";
import * as path from "path";

async function main() {
  const uriAccessorFactory = new UriAccessorFactory({
    currentUser: process.env.USER,
    uriAccessorFileEnabled: true
  });
  const filePath = "file://package.json";
  console.log({ filePath });
  const uriAccessor = uriAccessorFactory.getUriAccessor(filePath);
  return await uriAccessor.getContent();
}

main().then(console.log).catch(console.log);
