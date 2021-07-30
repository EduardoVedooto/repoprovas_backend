import './setup';

import app, { init } from './app';

const port = process.env.PORT || 4000;

init().then(() => {
  app.listen(port, () => console.info(`server running on port ${port} \norm: ${process.env.TYPEORM_URL}`));
});
