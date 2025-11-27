import { useState } from "react";
import xIcon from "../../shared/assets/icons/x02.svg";
import heartFilledIcon from "../../shared/assets/icons/heat_fill.svg";

interface Comment {
  id: number;
  author: string;
  timeAgo: string;
  content: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  commentCount: number;
}

export const CommentSidebar = ({
  isOpen,
  onClose,
  commentCount,
}: CommentSidebarProps) => {
  const [comments] = useState<Comment[]>([
    {
      id: 1,
      author: "이름입니다",
      timeAgo: "0분 전",
      content: "댓글입니다댓글란입니다댓글 댓글란입니다댓글란입니다댓글",
      likes: 0,
      replies: [
        {
          id: 2,
          author: "이름입니다",
          timeAgo: "0분 전",
          content:
            "댓글란입니다댓글란입니다댓글란입니다댓글란입니다댓글란입니다댓글란입니다댓글란입니다댓글",
          likes: 0,
        },
      ],
    },
    {
      id: 3,
      author: "이름입니다",
      timeAgo: "0분 전",
      content:
        "댓글란입니다댓글란입니다댓글란입니다댓글란입니다 댓글란입니다댓글란입니다댓글란입니다댓글란입니다",
      likes: 0,
    },
    {
      id: 4,
      author: "이름입니다",
      timeAgo: "0분 전",
      content:
        "댓글란입니다댓글란입니다댓글란입니다댓글란입니다 댓글란입니다댓글란입니다댓글란입니다댓글란입니다",
      likes: 0,
    },
  ]);

  const [expandedReplies, setExpandedReplies] = useState<Set<number>>(
    new Set()
  );
  const [replyTo, setReplyTo] = useState<{
    author: string;
    commentId: number;
  } | null>(null);
  const [commentInput, setCommentInput] = useState("");

  const handleReplyToggle = (commentId: number) => {
    const newExpanded = new Set(expandedReplies);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedReplies(newExpanded);
  };

  const handleReplyClick = (author: string, commentId: number) => {
    setReplyTo({ author, commentId });
  };

  const handleCancelReply = () => {
    setReplyTo(null);
    setCommentInput("");
  };

  const handleSubmitComment = () => {
    if (!commentInput.trim()) return;

    // 댓글 추가 로직 (실제로는 API 호출)
    setCommentInput("");
    setReplyTo(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      />

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-[24px] font-bold text-gray-7">
              댓글 {commentCount}
            </h2>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <img src={xIcon} alt="Close" className="w-6 h-6" />
            </button>
          </div>

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {comments.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-[16px]">
                  첫 댓글을 남겨주세요
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {comments.map((comment) => (
                  <div key={comment.id}>
                    {/* Main Comment */}
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-[14px] text-gray-7">
                            {comment.author}
                          </span>
                          <span className="text-[12px] text-gray-400">
                            {comment.timeAgo}
                          </span>
                        </div>
                        <p className="text-[14px] text-gray-7 leading-[20px] mb-2">
                          {comment.content}
                        </p>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() =>
                              handleReplyClick(comment.author, comment.id)
                            }
                            className="flex items-center gap-1 text-gray-400 text-[12px] hover:text-gray-600"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            답글 달기
                          </button>
                          <button className="flex items-center gap-1 text-gray-400 text-[12px] hover:text-red-500">
                            <img
                              src={heartFilledIcon}
                              alt="Like"
                              className="w-4 h-4"
                            />
                            <span>{comment.likes}</span>
                          </button>
                        </div>

                        {/* Replies */}
                        {comment.replies && comment.replies.length > 0 && (
                          <div className="mt-4">
                            {expandedReplies.has(comment.id) ? (
                              <>
                                {comment.replies.map((reply) => (
                                  <div
                                    key={reply.id}
                                    className="flex gap-3 mt-3 pl-4 border-l-2 border-gray-200"
                                  >
                                    <div className="w-8 h-8 rounded-full bg-gray-200 shrink-0" />
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <span className="font-semibold text-[14px] text-gray-7">
                                          {reply.author}
                                        </span>
                                        <span className="text-[12px] text-gray-400">
                                          {reply.timeAgo}
                                        </span>
                                      </div>
                                      <p className="text-[14px] text-gray-7 leading-[20px] mb-2">
                                        {reply.content}
                                      </p>
                                      <div className="flex items-center gap-4">
                                        <button
                                          onClick={() =>
                                            handleReplyClick(
                                              reply.author,
                                              reply.id
                                            )
                                          }
                                          className="flex items-center gap-1 text-gray-400 text-[12px] hover:text-gray-600"
                                        >
                                          <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                          </svg>
                                          답글 달기
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 text-[12px] hover:text-red-500">
                                          <img
                                            src={heartFilledIcon}
                                            alt="Like"
                                            className="w-4 h-4"
                                          />
                                          <span>{reply.likes}</span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                                <button
                                  onClick={() => handleReplyToggle(comment.id)}
                                  className="mt-2 text-[12px] text-gray-400 hover:text-gray-600"
                                >
                                  답글 접기
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleReplyToggle(comment.id)}
                                className="mt-2 text-[12px] text-gray-400 hover:text-gray-600"
                              >
                                답글 {comment.replies.length}개 더보기
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Comment Input */}
          <div className="border-t border-gray-200 p-4">
            {replyTo && (
              <div className="flex items-center justify-between mb-2 px-4 py-2 bg-primary-light rounded">
                <span className="text-[14px] text-primary font-medium">
                  {replyTo.author}님에게 답글을 남깁니다
                </span>
                <button
                  onClick={handleCancelReply}
                  className="text-[14px] text-gray-600 hover:text-gray-800"
                >
                  취소
                </button>
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="댓글을 입력하세요"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-[14px]"
              />
              <button
                onClick={handleSubmitComment}
                disabled={!commentInput.trim()}
                className="px-6 py-2 bg-gray-300 text-gray-600 rounded-lg font-medium text-[14px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400 hover:text-gray-700 transition-colors"
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
