export const state = () => ({
  editors: [] as any[],
  editor: undefined as any,
  editors_pagination: {
    current_page: 1,
    per_page: 15,
    total: 0,
  },
  loading: false,
  editor_id: "" as string,
});

export type EditorState = ReturnType<typeof state>;