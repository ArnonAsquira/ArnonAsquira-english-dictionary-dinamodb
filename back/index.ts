import app from "./app";
import { PORT } from "./utils/enviorment-varibales";
import * as logger from "./utils/logger";

app.listen(PORT, () => {
  logger.info(`app listening on port ${PORT}`);
});
