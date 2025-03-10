package dev.mineblock11.fabric.referencemod.datagen.provider;

import dev.mineblock11.fabric.referencemod.MyMod;
import dev.mineblock11.fabric.referencemod.block.ModBlocks;
import dev.mineblock11.fabric.referencemod.util.helper.LoggerUtil;
import net.fabricmc.fabric.api.datagen.v1.FabricDataOutput;
import net.fabricmc.fabric.api.datagen.v1.provider.FabricLanguageProvider;

import java.nio.file.Path;
import java.util.Optional;

public class EnglishTranslationProvider extends FabricLanguageProvider {
    public EnglishTranslationProvider(FabricDataOutput dataOutput) {
        // Specifying the language code is optional in this case!
        // 'en_us' is always the default.
        super(dataOutput, "en_us");
    }

    @Override
    public void generateTranslations(TranslationBuilder translationBuilder) {
        translationBuilder.add(ModBlocks.PRISMARINE_LAMP, "Prismarine Lamp");
        translationBuilder.add(ModBlocks.TEST_BLOCK, "Test Block");

        translationBuilder.add(ModBlocks.ADVANCED_TEST_BLOCK, "Advanced Test Block");
        translationBuilder.add(String.format("%s.subtitle", ModBlocks.ADVANCED_TEST_BLOCK.getTranslationKey()),
                "§3[SHIFT]§r to expand Tooltip window!");
        translationBuilder.add(String.format("%s.subtitle.shift_0", ModBlocks.ADVANCED_TEST_BLOCK.getTranslationKey()),
                "§3[Interact]§r with this block to cycle between arrows");
        translationBuilder.add(String.format("%s.subtitle.shift_1", ModBlocks.ADVANCED_TEST_BLOCK.getTranslationKey()),
                "§3[Sneak + Interact]§r with this block to change the VoxelShape");

        translationBuilder.add(String.format("sound.%s.metal_whistle", MyMod.MOD_ID), "Metal Whistle Sound");

        try {
            Optional<Path> path = dataOutput.getModContainer().findPath("assets/referencemod/lang/en_us.unmerged.json");
            translationBuilder.add(path.get());
        } catch (Exception e) {
            LoggerUtil.devLogger("Failed to merge language file", true, e);
        }
    }
}
