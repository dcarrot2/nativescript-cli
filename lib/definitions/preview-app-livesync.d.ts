import { FilePayload, Device, FilesPayload } from "nativescript-preview-sdk";

declare global {
	interface IPreviewAppLiveSyncService {
		initialize(data: IPreviewAppLiveSyncData): void;
		syncFiles(data: IPreviewAppLiveSyncData, filesToSync: string[], filesToRemove: string[]): Promise<void>;
		stopLiveSync(): Promise<void>;
	}

	interface IPreviewAppLiveSyncData extends IProjectDir, IAppFilesUpdaterOptionsComposition, IEnvOptions { }

	interface IPreviewSdkService {
		getQrCodeUrl(options: IHasUseHotModuleReloadOption): string;
		connectedDevices: Device[];
		initialize(getInitialFiles: (device: Device) => Promise<FilesPayload>): void;
		applyChanges(filesPayload: FilesPayload): Promise<void>;
		stop(): void;
	}

	interface IPreviewAppPluginsService {
		comparePluginsOnDevice(data: IPreviewAppLiveSyncData, device: Device): Promise<void>;
		getExternalPlugins(device: Device): string[];
	}

	interface IPreviewCommandHelper {
		run(): void;
	}

	interface IPlaygroundQrCodeGenerator {
		generateQrCodeForiOS(): Promise<void>;
		generateQrCodeForAndroid(): Promise<void>;
		generateQrCodeForCurrentApp(options: IHasUseHotModuleReloadOption): Promise<void>;
	}
}