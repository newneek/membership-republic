interface ColorTable {
    gray: { [key: string]: string | number };
    red: { [key: string]: string | number };
    coral: { [key: string]: string | number };
    yellow: { [key: string]: string | number };
    green: { [key: string]: string | number };
    teal: { [key: string]: string | number };
    blue: { [key: string]: string | number };
    indigo: { [key: string]: string | number };
    purple: { [key: string]: string | number };
    magenta: { [key: string]: string | number };
}

type StyleType = Dictionary<string | number>[] | Dictionary<string | number>;

interface SizeTable {
    small: StyleType;
    medium: StyleType;
}
