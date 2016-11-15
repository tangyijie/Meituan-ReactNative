/**
 * Created by mrd on 16/11/14.
 */
export function goPage(item) {
    return { type: item.name}
}
export function goBack() {
    return {type: "INIT_PAGE"}
}