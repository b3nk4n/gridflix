import { assertEquals } from "jsr:@std/assert";
import { GridFlix } from "./gridflix.ts";

Deno.test("Test appdata dir", async () => {
    // Create a temporary directory
    const tempDir = Deno.makeTempDirSync();

    // Create an instance of GridFlix
    const gridFlix = await GridFlix.createInstance(tempDir);

    // Check if the appDataDir is set correctly
    assertEquals(gridFlix.appDataDir, tempDir);

    await gridFlix.close();

    // Clean up
    Deno.removeSync(tempDir, { recursive: true });
});

Deno.test("Test isAllowedPath", async () => {
    // Create a temporary directory
    const tempDir = Deno.makeTempDirSync();

    // Create an instance of GridFlix
    const gridFlix = await GridFlix.createInstance(tempDir);

    let result = gridFlix.isAllowedPath("C:\\MyExampleVideosFolder\\Animes\\");
    assertEquals(result, true);

    result = gridFlix.isAllowedPath("C:\\MyExampleVideosFolder\\Animes");
    assertEquals(result, true);

    result = gridFlix.isAllowedPath("C:\\NotAllowedFolder");
    assertEquals(result, false);

    result = gridFlix.isAllowedPath("C:\\MyExampleVideosFolder\\..");
    //assertEquals(result, false);

    result = gridFlix.isAllowedPath("C:\\MyExampleVideosFolder\\..\\Animes");
    //assertEquals(result, false);

    result = gridFlix.isAllowedPath("C:\\MyExampleVideosFolder\\.\\Animes\\A\\B\\C");
    //assertEquals(result, false);

    result = gridFlix.isAllowedPath("/home/user/MyExampleVideosFolder/Animes/");
    assertEquals(result, false);

    await gridFlix.close();

    // Clean up
    Deno.removeSync(tempDir, { recursive: true });
});
