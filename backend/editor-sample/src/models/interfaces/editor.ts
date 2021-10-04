export default interface IEditor {
  _id: string;
  match_id: string;
  programming_language: string;
  content: string; // Contains the codes
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}
