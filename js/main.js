import { renderGallery } from './gallery.js';
import { procureData, transmitData } from './server-data.js';
import { showBanner } from './util.js';
import { exposeSuccessMessage, exposeErrorMessage } from './upload-message.js';
import { uploadFormOnSubmit, close } from './validation-loading-form.js';

uploadFormOnSubmit (async (data) => {
  try {
    await transmitData(data);
    exposeSuccessMessage();
    close();
  } catch {
    exposeErrorMessage();
  }
});

try {
  const data = await procureData();
  renderGallery(data);
} catch(err) {
  showBanner(err.message);
}
