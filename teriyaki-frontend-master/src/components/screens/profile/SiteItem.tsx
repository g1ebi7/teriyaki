import cn from "classnames";

import styles from "./Profile.module.scss";

import { useDateFormatter } from "@/hooks/useDateFormatter";
import { ISite } from "@/types/user.interface";

const SiteItem = ({ site }: { site: ISite }) => {
  const date = useDateFormatter(site.createdAt);

  return (
    <li className="flex justify-between">
      <div>
        <p className="text-xl font-medium">{`${site.price}.00 €`}</p>
        <p>{`Created at ${date}`}</p>
      </div>
      <div className="flex gap-2">
        <div
          className={cn({
            [styles.active]: site.active,
            [styles.disactive]: !site.active,
          })}
        ></div>
        <span>{site.active ? "Active" : "Inactive"}</span>
      </div>
    </li>
  );
};

export default SiteItem;
