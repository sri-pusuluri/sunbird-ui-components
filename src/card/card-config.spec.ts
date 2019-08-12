import {SbCardConfig} from './card-config';

describe('sb-card-config', () => {
  it('should have sensible default values', () => {
    const config = new SbCardConfig();

    expect(config.dismissible).toBe(true);
    expect(config.type).toBe('warning');
  });
});
