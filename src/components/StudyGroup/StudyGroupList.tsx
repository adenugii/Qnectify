import StudyGroupCard, { StudyGroupCardProps } from "./StudyGroupCard";

interface Props {
  groups: StudyGroupCardProps[];
  token?: string;
}

export default function StudyGroupList({ groups, token }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {groups.map((group, idx) => (
        <StudyGroupCard key={group.title + idx} {...group} token={token} />
      ))}
    </div>
  );
}
