export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} 陈永康. All rights reserved.</p>
      </div>
    </footer>
  )
}
