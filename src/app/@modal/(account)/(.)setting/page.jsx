import Link from 'next/link';

export default function SettingModalPage() {
  return (
    <div>
      SettingModalPage
      <Link href='/profile' className='text-blue-500 w-full' replace>
        Profile
      </Link>
    </div>
  );
}
