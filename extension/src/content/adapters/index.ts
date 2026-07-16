import type { Adapter } from "../../lib/types";
import { AshbyAdapter } from "./ashby";
import { GenericAdapter } from "./generic";
import { GreenhouseAdapter } from "./greenhouse";
import { IndeedAdapter } from "./indeed";
import { LeverAdapter } from "./lever";
import { LinkedInAdapter } from "./linkedin";
import { WorkdayAdapter } from "./workday";

export function getAdapter(): Adapter {
  const adapters: Adapter[] = [
    new LinkedInAdapter(),
    new WorkdayAdapter(),
    new GreenhouseAdapter(),
    new LeverAdapter(),
    new AshbyAdapter(),
    new IndeedAdapter(),
  ];
  return adapters.find((adapter) => adapter.detect()) ?? new GenericAdapter();
}

