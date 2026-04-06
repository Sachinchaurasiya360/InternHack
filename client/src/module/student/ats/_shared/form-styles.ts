// Thin re-export of the global form tokens with the ATS module's violet
// accent baked in. Kept so existing ATS imports keep working.
import { getInputCls, labelCls } from "../../../../components/ui/form";

export const inputCls = getInputCls("violet");
export { labelCls };
