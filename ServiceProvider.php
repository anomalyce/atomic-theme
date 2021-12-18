<?php

namespace Anomalyce\Atomic\Theme;

use Anomalyce\Atomic\Adapter\Providers\ThemeServiceProvider;

class ServiceProvider extends ThemeServiceProvider
{
  /**
   * Define the theme name.
   * 
   * @return string
   */
  public function name(): string
  {
    return 'atomic-theme';
  }

  /**
   * Define the theme's absolute directory path.
   * 
   * @return string
   */
  public function package_path(): string
  {
    return __DIR__;
  }

  /**
   * Define the public directory relative to the theme.
   * 
   * @return string
   */
  public function public_path(): string
  {
    return 'dist';
  }

  /**
   * Define a list of scripts to include from the theme.
   * 
   * @return array
   */
  public function scripts(): array
  {
    return [
      '/js/manifest.js',
      '/js/vendor.js',
      '/js/theme.js',
    ];
  }

  /**
   * Define a list of stylesheets to include from the theme.
   * 
   * @return array
   */
  public function stylesheets(): array
  {
    return [
      '/css/theme.css',
    ];
  }

  /**
   * Define a list of view paths to include.
   * 
   * @return array
   */
  public function views(): array
  {
    return [
      // __DIR__.'/resources/views',
    ];
  }
}
