let
  pkgs = import <nixpkgs> {};
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    yarn
    playwright-driver.browsers
  ];

  shellHook = ''
    export PLAYWRIGHT_BROWSERS_PATH=${pkgs.playwright-driver.browsers}
    export PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true

    yarn install
    npx playwright install
    yarn run dev
  '';
}