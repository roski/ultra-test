import { StateUtils } from '@app-shared/state/state-utils';

const GIPHY_STATE_KEY = '[Giphy]';

/** get trending gifs */
export class GetGiphyTrending {
  static readonly type = StateUtils.buildStateType(
    GIPHY_STATE_KEY,
    'Get Trending gifs'
  );
}
