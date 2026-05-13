# GridFlix

GridFlix is a fancy frontend for browsing your video folders on Windows.

![](https://github.com/user-attachments/assets/1d5c2191-b0a8-4c6c-9b00-9f34b666203a)

## Features

- ✨ Fancy UI - displays your video libraries in a fancy layout
- 📂 Respects your folder structure
- 🚗 Support local and network drives (SMB)
- 📺 Launches video in your favorite video player
- 🖼️ Generates thumbnails for each video and folder
  - Supports `cover.jpg` / `cover.png` for folders
- 🛤️ Tracks your watched status easily
  - ⏯️ Display the last playback position of videos (MPC-HC only)
  - ✅ Mark videos as "watched/done" by right-clicking
  - 🔢 Highlights episode numbers in filenames for easier reading
- 🪟 Sets Grid view, List view, and sorting options for each folder
- 📦 Portable

## Requirements

- Windows 10 or 11 (x64)
- Modern browser like Firefox or Chrome
- Your favorite video player (MPC-HC is recommended)
- Resolution: 1920x1080 (100 dpi) or higher
- (Optional) [K-Lite Codec Pack](https://codecguide.com/download_kl.htm) - `Full` version is recommended, includes MPC-HC
- (Optional) [MPC-HC extra settings - improve user experience](https://github.com/louislam/gridflix/wiki/MPC%E2%80%90HC-Settings)

## How to Use

### Method 1: Download the compiled binary (.exe)

1. Download [gridflix-win-x64.7z](https://github.com/louislam/gridflix/releases/latest)
2. Decompress with 7-Zip or WinRAR
3. Edit `config.yaml` to set your video folder paths

   ```yaml
   folders:
       - C:\My Videos Folder
       - \\SMB\My Videos Folder
   ```
4. Run `GridFlix.exe` to start the server

### Method 2: Run the source code using Deno

Extra requirements:

- Install Deno 2.7.1 or higher (https://docs.deno.com/runtime/)
- Install Git (https://git-scm.com/downloads)

1. Clone this repository and install dependencies:

   ```bash
   git clone https://github.com/louislam/gridflix
   cd gridflix
   git checkout 1.2.0
   deno task setup
   ```

2. Edit `config.yaml` to set your video folder paths:

   ```yaml
   folders:
       - C:\My Videos Folder
       - \\SMB\My Videos Folder
   ```

3. Start the server:

   ```bash
   deno task start
   ```

## FAQ

### How to refresh cached thumbnails in browser?

Ctrl + F5 in your browser.

### Can I use it on my phone?

No.

### Can I use it on Mac/Linux Desktop?

No. GridFlix is built for Windows. For other systems, someone else would need to fork it.

### Jellyfin replacement?

No. GridFlix focuses on displaying your video libraries on Windows and relies on video players like MPC-HC for playback.

If you want to stream videos to your phone or play music, you may still need Jellyfin.
