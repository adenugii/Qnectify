interface Member {
  name: string;
  avatar: string;
  role: string;
  xp: number;
  quizDone: number;
  isYou?: boolean;
}

interface GroupMembersProps {
  members: Member[];
}

export default function GroupMembers({ members }: GroupMembersProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Anggota Grup</h3>
      <div className="flex flex-col gap-3">
        {members.map((member, idx) => (
          <div
            key={member.name + idx}
            className="flex items-center gap-4 px-4 py-3 rounded-lg border border-gray-100"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold text-gray-900 text-sm">
                {member.name}
                {member.isYou && (
                  <span className="ml-2 text-xs text-violet-500 font-bold">(Kamu)</span>
                )}
              </div>
              <div className="text-xs text-gray-400">{member.role}</div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold text-violet-500 text-base">
                {member.xp.toLocaleString("en-US")} XP
              </span>
              <span className="text-xs text-gray-400">
                {member.quizDone} quiz selesai
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}