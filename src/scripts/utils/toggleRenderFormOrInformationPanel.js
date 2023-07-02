import { FormService } from "../services/FormService";
import { InformationPanelService } from "../services/InformationPanelService";

export function toggleRenderFormOrInformationPanel() {
  FormService.toggleShowHideFormById('form');
  InformationPanelService.toggleShowHide();
}
