import StudyGroupCard, { StudyGroupCardProps } from "./StudyGroupCard";

interface Props {
  groups?: StudyGroupCardProps[];
}

export default function StudyGroupList({ groups = [] }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {groups.map((group, idx) => (
        <StudyGroupCard key={group.id || idx} {...group} />
      ))}
    </div>
  );
}