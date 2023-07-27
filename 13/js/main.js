import { renderGallery } from './gallery.js';
import { procureData, transmitData } from './server-data.js';
import { showBanner, debounce } from './util.js';
import { exposeSuccessMessage, exposeErrorMessage } from './upload-message.js';
import { uploadFormOnSubmit, close as closeForm} from './validation-loading-form.js';
import { init as initFilter, getSortedPictures } from './pictures-sort-out.js';

uploadFormOnSubmit (async (data) => {
  try {
    await transmitData(data);
    exposeSuccessMessage();
    closeForm();
  } catch {
    exposeErrorMessage();
  }
});

try {
  const data = await procureData();
  const debouncedRenderGallery = debounce(renderGallery);
  initFilter(data, debouncedRenderGallery);
  renderGallery(getSortedPictures());
} catch(err) {
  showBanner(err.message);
}
