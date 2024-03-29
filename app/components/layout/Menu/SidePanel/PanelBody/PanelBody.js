import styles from "./PanelBody.module.css";
import * as Icons from "./icons";
import MenuEntry from "./MenuEntry/MenuEntry";
import Accordion from "./Accordion/Accordion";
import { links } from "./MenuEntry/config";

export default function PanelBody({ isPushed, onClick }) {
  return (
    <div className={styles.container}>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" />;

        if (entry.items) {
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              icon={iconElement}
              label={entry.label}
            >
              {isPushed ||
                entry.items.map((item) => {
                  return (
                    <MenuEntry
                      key={item.href}
                      href={item.href}
                      onClick={onClick}
                    >
                      {item.label}
                    </MenuEntry>
                  );
                })}
            </Accordion>
          );
        }

        return (
          <MenuEntry key={entry.label} href={entry.href} onClick={onClick}>
            {iconElement}
            {entry.label}
          </MenuEntry>
        );
      })}
    </div>
  );
}
