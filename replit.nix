{ pkgs }: {
  deps = [
    pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
    pkgs.ffmpeg-full
    pkgs.imagemagick
    pkgs.git
    pkgs.python3
    pkgs.cairo
    pkgs.pango
    pkgs.libjpeg
    pkgs.giflib
    pkgs.librsvg
    pkgs.pixman
  ];
}
