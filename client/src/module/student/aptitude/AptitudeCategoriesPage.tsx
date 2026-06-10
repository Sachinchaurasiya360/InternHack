
i
m
p
o
r
t
 
{
 
L
o
a
d
i
n
g
S
c
r
e
e
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
L
o
a
d
i
n
g
S
c
r
e
e
n
"
;


i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
"
;


i
m
p
o
r
t
 
{
 
L
i
n
k
 
}
 
f
r
o
m
 
"
r
e
a
c
t
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
B
u
i
l
d
i
n
g
2
,
 
A
r
r
o
w
U
p
R
i
g
h
t
,
 
B
r
a
i
n
,
 
B
o
o
k
O
p
e
n
,
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,
 
S
e
a
r
c
h
,
 
X
,
 
A
l
e
r
t
T
r
i
a
n
g
l
e
,
 
T
a
r
g
e
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
a
p
i
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
x
i
o
s
"
;


i
m
p
o
r
t
 
{
 
q
u
e
r
y
K
e
y
s
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
q
u
e
r
y
-
k
e
y
s
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
A
p
t
i
t
u
d
e
C
a
t
e
g
o
r
y
,
 
A
p
t
i
t
u
d
e
P
r
o
g
r
e
s
s
,
 
A
p
t
i
t
u
d
e
W
e
a
k
A
r
e
a
s
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
t
y
p
e
s
"
;


i
m
p
o
r
t
 
{
 
u
s
e
A
u
t
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;


i
m
p
o
r
t
 
{
 
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
"
;


i
m
p
o
r
t
 
{
 
K
i
c
k
e
r
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
K
i
c
k
e
r
"
;




/
/
 
—
 
S
t
r
e
a
k
 
B
a
n
n
e
r
 
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—
—


t
y
p
e
 
S
t
r
e
a
k
B
a
n
n
e
r
P
r
o
p
s
 
=
 
{
 
s
t
r
e
a
k
:
 
n
u
m
b
e
r
 
}
;




f
u
n
c
t
i
o
n
 
S
t
r
e
a
k
B
a
n
n
e
r
(
{
 
s
t
r
e
a
k
 
}
:
 
S
t
r
e
a
k
B
a
n
n
e
r
P
r
o
p
s
)
 
{


 
 
i
f
 
(
s
t
r
e
a
k
 
>
 
0
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
3
 
m
b
-
6
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
y
e
l
l
o
w
-
9
5
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
y
e
l
l
o
w
-
7
0
0
 
t
e
x
t
-
y
e
l
l
o
w
-
2
0
0
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
r
o
l
e
=
"
i
m
g
"
 
a
r
i
a
-
l
a
b
e
l
=
"
f
l
a
m
e
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
l
"
>
🔥
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
{
s
t
r
e
a
k
}
-
d
a
y
 
s
t
r
e
a
k
<
/
s
t
r
o
n
g
>
 
—
 
K
e
e
p
 
i
t
 
u
p
!
 
P
r
a
c
t
i
c
e
 
t
o
d
a
y
 
t
o
 
c
o
n
t
i
n
u
e
 
y
o
u
r
 
s
t
r
e
a
k
.


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
p
x
-
4
 
p
y
-
3
 
m
b
-
6
 
r
o
u
n
d
e
d
-
l
g
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
7
0
0
 
t
e
x
t
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
3
0
0
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
<
s
p
a
n
 
r
o
l
e
=
"
i
m
g
"
 
a
r
i
a
-
l
a
b
e
l
=
"
t
a
r
g
e
t
"
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
l
"
>
🎯
<
/
s
p
a
n
>


 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
S
t
a
r
t
 
y
o
u
r
 
a
p
t
i
t
u
d
e
 
s
t
r
e
a
k
 
t
o
d
a
y
!
<
/
s
t
r
o
n
g
>
 
P
r
a
c
t
i
c
e
 
n
o
w
 
a
n
d
 
b
u
i
l
d
 
y
o
u
r
 
d
a
i
l
y
 
h
a
b
i
t
.


 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
W
e
a
k
A
r
e
a
D
a
s
h
b
o
a
r
d
(
{
 
w
e
a
k
A
r
e
a
s
 
}
:
 
{
 
w
e
a
k
A
r
e
a
s
?
:
 
A
p
t
i
t
u
d
e
W
e
a
k
A
r
e
a
s
 
}
)
 
{


 
 
i
f
 
(
!
w
e
a
k
A
r
e
a
s
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
c
o
n
s
t
 
t
o
p
i
c
s
 
=
 
w
e
a
k
A
r
e
a
s
.
t
o
p
i
c
s
.
s
l
i
c
e
(
0
,
 
8
)
;


 
 
c
o
n
s
t
 
f
o
c
u
s
T
o
p
i
c
s
 
=
 
w
e
a
k
A
r
e
a
s
.
f
o
c
u
s
R
e
c
o
m
m
e
n
d
a
t
i
o
n
s
;




 
 
i
f
 
(
!
w
e
a
k
A
r
e
a
s
.
i
s
R
e
a
d
y
)
 
{


 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
8
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
b
g
-
w
h
i
t
e
 
p
x
-
5
 
p
y
-
4
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
T
a
r
g
e
t
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
0
.
5
 
h
-
4
 
w
-
4
 
s
h
r
i
n
k
-
0
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
W
e
a
k
 
a
r
e
a
 
a
n
a
l
y
s
i
s
 
u
n
l
o
c
k
s
 
a
t
 
2
0
 
a
n
s
w
e
r
s
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
x
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
 
{
M
a
t
h
.
m
a
x
(
w
e
a
k
A
r
e
a
s
.
m
i
n
i
m
u
m
A
n
s
w
e
r
e
d
 
-
 
w
e
a
k
A
r
e
a
s
.
t
o
t
a
l
A
n
s
w
e
r
e
d
,
 
0
)
}
 
m
o
r
e
 
q
u
e
s
t
i
o
n
{
w
e
a
k
A
r
e
a
s
.
m
i
n
i
m
u
m
A
n
s
w
e
r
e
d
 
-
 
w
e
a
k
A
r
e
a
s
.
t
o
t
a
l
A
n
s
w
e
r
e
d
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
s
"
}
 
t
o
 
g
e
t
 
t
o
p
i
c
-
l
e
v
e
l
 
r
e
c
o
m
m
e
n
d
a
t
i
o
n
s
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
)
;


 
 
}




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
8
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
b
g
-
w
h
i
t
e
 
p
x
-
5
 
p
y
-
5
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
"
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
5
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
s
t
a
r
t
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
d
i
a
g
n
o
s
i
s
 
/
 
w
e
a
k
 
a
r
e
a
s


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
Y
o
u
r
 
a
c
c
u
r
a
c
y
 
b
y
 
t
o
p
i
c


 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
p
x
-
2
 
p
y
-
1
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
{
w
e
a
k
A
r
e
a
s
.
t
o
t
a
l
A
n
s
w
e
r
e
d
}
 
a
n
s
w
e
r
e
d


 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
{
f
o
c
u
s
T
o
p
i
c
s
.
l
e
n
g
t
h
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
r
e
d
-
2
0
0
 
b
g
-
r
e
d
-
5
0
 
p
x
-
4
 
p
y
-
3
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
9
0
0
/
7
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
5
0
/
3
0
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
2
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
r
e
d
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
3
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
l
e
 
c
l
a
s
s
N
a
m
e
=
"
h
-
4
 
w
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
F
o
c
u
s
 
o
n
 
t
h
e
s
e
 
3
 
t
o
p
i
c
s


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
o
c
u
s
T
o
p
i
c
s
.
m
a
p
(
(
t
o
p
i
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
o
p
i
c
.
t
o
p
i
c
I
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
l
e
a
r
n
/
a
p
t
i
t
u
d
e
/
$
{
t
o
p
i
c
.
t
o
p
i
c
S
l
u
g
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
r
o
u
n
d
e
d
-
m
d
 
b
g
-
w
h
i
t
e
 
p
x
-
2
.
5
 
p
y
-
1
.
5
 
t
e
x
t
-
x
s
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
r
e
d
-
7
0
0
 
n
o
-
u
n
d
e
r
l
i
n
e
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
h
o
v
e
r
:
b
g
-
r
e
d
-
1
0
0
 
d
a
r
k
:
b
g
-
r
e
d
-
9
5
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
2
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
r
e
d
-
9
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
t
o
p
i
c
N
a
m
e
}
 
·
 
{
t
o
p
i
c
.
a
c
c
u
r
a
c
y
}
%


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
{
t
o
p
i
c
s
.
m
a
p
(
(
t
o
p
i
c
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
o
p
i
c
.
t
o
p
i
c
I
d
}


 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
l
e
a
r
n
/
a
p
t
i
t
u
d
e
/
$
{
t
o
p
i
c
.
t
o
p
i
c
S
l
u
g
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
l
o
c
k
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
3
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
s
e
m
i
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
1
0
0
"
>
{
t
o
p
i
c
.
t
o
p
i
c
N
a
m
e
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
m
l
-
2
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
a
n
s
w
e
r
e
d
}
 
a
n
s
w
e
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
{
`
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
$
{
t
o
p
i
c
.
i
s
W
e
a
k
 
?
 
"
t
e
x
t
-
r
e
d
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
"
 
:
 
"
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
a
c
c
u
r
a
c
y
}
%


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
h
-
2
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
s
m
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
h
-
f
u
l
l
 
$
{
t
o
p
i
c
.
i
s
W
e
a
k
 
?
 
"
b
g
-
r
e
d
-
5
0
0
"
 
:
 
"
b
g
-
l
i
m
e
-
5
0
0
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
t
o
p
i
c
.
a
c
c
u
r
a
c
y
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
A
p
t
i
t
u
d
e
C
a
t
e
g
o
r
i
e
s
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
{
 
u
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;


 
 
c
o
n
s
t
 
[
a
c
t
i
v
e
T
a
b
,
 
s
e
t
A
c
t
i
v
e
T
a
b
]
 
=
 
u
s
e
S
t
a
t
e
<
s
t
r
i
n
g
>
(
"
a
l
l
"
)
;


 
 
c
o
n
s
t
 
[
t
o
p
i
c
S
e
a
r
c
h
,
 
s
e
t
T
o
p
i
c
S
e
a
r
c
h
]
 
=
 
u
s
e
S
t
a
t
e
(
"
"
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
c
a
t
e
g
o
r
i
e
s
,
 
i
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
a
p
t
i
t
u
d
e
.
c
a
t
e
g
o
r
i
e
s
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
<
A
p
t
i
t
u
d
e
C
a
t
e
g
o
r
y
[
]
>
(
"
/
a
p
t
i
t
u
d
e
/
c
a
t
e
g
o
r
i
e
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
3
0
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
}
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
p
r
o
g
r
e
s
s
,
 
i
s
S
u
c
c
e
s
s
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
a
p
t
i
t
u
d
e
.
p
r
o
g
r
e
s
s
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
<
A
p
t
i
t
u
d
e
P
r
o
g
r
e
s
s
>
(
"
/
a
p
t
i
t
u
d
e
/
p
r
o
g
r
e
s
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
u
s
e
r
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
2
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
 
 
r
e
f
e
t
c
h
O
n
W
i
n
d
o
w
F
o
c
u
s
:
 
t
r
u
e
,


 
 
}
)
;


 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
w
e
a
k
A
r
e
a
s
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
q
u
e
r
y
K
e
y
s
.
a
p
t
i
t
u
d
e
.
w
e
a
k
A
r
e
a
s
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
(
)
 
=
>
 
a
p
i
.
g
e
t
<
A
p
t
i
t
u
d
e
W
e
a
k
A
r
e
a
s
>
(
"
/
a
p
t
i
t
u
d
e
/
w
e
a
k
-
a
r
e
a
s
"
)
.
t
h
e
n
(
(
r
)
 
=
>
 
r
.
d
a
t
a
)
,


 
 
 
 
e
n
a
b
l
e
d
:
 
!
!
u
s
e
r
,


 
 
 
 
s
t
a
l
e
T
i
m
e
:
 
2
 
*
 
6
0
 
*
 
1
0
0
0
,


 
 
 
 
r
e
f
e
t
c
h
O
n
W
i
n
d
o
w
F
o
c
u
s
:
 
t
r
u
e
,


 
 
}
)
;


c
o
n
s
t
 
c
l
e
a
r
F
i
l
t
e
r
s
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
T
o
p
i
c
S
e
a
r
c
h
(
"
"
)
;


 
 
 
 
s
e
t
A
c
t
i
v
e
T
a
b
(
"
a
l
l
"
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
s
F
i
l
t
e
r
s
 
=
 
t
o
p
i
c
S
e
a
r
c
h
.
t
r
i
m
(
)
 
!
=
=
 
"
"
 
|
|
 
a
c
t
i
v
e
T
a
b
 
!
=
=
 
"
a
l
l
"
;


 
 
c
o
n
s
t
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
=
 
c
a
t
e
g
o
r
i
e
s
?
.
r
e
d
u
c
e
(
(
s
,
 
c
)
 
=
>
 
s
 
+
 
c
.
q
u
e
s
t
i
o
n
C
o
u
n
t
,
 
0
)
 
?
?
 
0
;


 
 
c
o
n
s
t
 
t
o
t
a
l
A
n
s
w
e
r
e
d
 
=
 
c
a
t
e
g
o
r
i
e
s
?
.
r
e
d
u
c
e
(
(
s
,
 
c
)
 
=
>
 
s
 
+
 
c
.
a
n
s
w
e
r
e
d
C
o
u
n
t
,
 
0
)
 
?
?
 
0
;


 
 
c
o
n
s
t
 
o
v
e
r
a
l
l
P
c
t
 
=
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
t
o
t
a
l
A
n
s
w
e
r
e
d
 
/
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
)
 
*
 
1
0
0
)
 
:
 
0
;


 
 
c
o
n
s
t
 
t
o
t
a
l
T
o
p
i
c
s
 
=
 
c
a
t
e
g
o
r
i
e
s
?
.
r
e
d
u
c
e
(
(
s
,
 
c
)
 
=
>
 
s
 
+
 
c
.
t
o
p
i
c
s
.
l
e
n
g
t
h
,
 
0
)
 
?
?
 
0
;




 
 
c
o
n
s
t
 
a
l
l
T
o
p
i
c
s
 
=


 
 
 
 
c
a
t
e
g
o
r
i
e
s
?
.
f
l
a
t
M
a
p
(
(
c
a
t
)
 
=
>


 
 
 
 
 
 
c
a
t
.
t
o
p
i
c
s
.
m
a
p
(
(
t
)
 
=
>
 
(
{
 
.
.
.
t
,
 
c
a
t
e
g
o
r
y
S
l
u
g
:
 
c
a
t
.
s
l
u
g
,
 
c
a
t
e
g
o
r
y
N
a
m
e
:
 
c
a
t
.
n
a
m
e
 
}
)
)
,


 
 
 
 
)
 
?
?
 
[
]
;


 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
T
o
p
i
c
s
 
=
 
(
a
c
t
i
v
e
T
a
b
 
=
=
=
 
"
a
l
l
"
 
?
 
a
l
l
T
o
p
i
c
s
 
:
 
a
l
l
T
o
p
i
c
s
.
f
i
l
t
e
r
(
(
t
)
 
=
>
 
t
.
c
a
t
e
g
o
r
y
S
l
u
g
 
=
=
=
 
a
c
t
i
v
e
T
a
b
)
)
.
f
i
l
t
e
r
(


 
 
 
 
(
t
)
 
=
>
 
!
t
o
p
i
c
S
e
a
r
c
h
 
|
|
 
t
.
n
a
m
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
.
i
n
c
l
u
d
e
s
(
t
o
p
i
c
S
e
a
r
c
h
.
t
o
L
o
w
e
r
C
a
s
e
(
)
)
,


 
 
)
;




 
 
i
f
 
(
i
s
L
o
a
d
i
n
g
)
 
r
e
t
u
r
n
 
<
L
o
a
d
i
n
g
S
c
r
e
e
n
 
/
>
;




 
 
c
o
n
s
t
 
C
A
T
_
I
C
O
N
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
i
c
o
n
:
 
t
y
p
e
o
f
 
B
r
a
i
n
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
f
i
l
l
:
 
s
t
r
i
n
g
 
}
>
 
=
 
{


 
 
 
 
a
p
t
i
t
u
d
e
:
 
{
 
i
c
o
n
:
 
B
r
a
i
n
,
 
c
o
l
o
r
:
 
"
t
e
x
t
-
o
r
a
n
g
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
o
r
a
n
g
e
-
4
0
0
"
,
 
f
i
l
l
:
 
"
b
g
-
o
r
a
n
g
e
-
5
0
0
"
 
}
,


 
 
 
 
"
l
o
g
i
c
a
l
-
r
e
a
s
o
n
i
n
g
"
:
 
{
 
i
c
o
n
:
 
B
o
o
k
O
p
e
n
,
 
c
o
l
o
r
:
 
"
t
e
x
t
-
b
l
u
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
b
l
u
e
-
4
0
0
"
,
 
f
i
l
l
:
 
"
b
g
-
b
l
u
e
-
5
0
0
"
 
}
,


 
 
}
;


 
 
c
o
n
s
t
 
d
e
f
a
u
l
t
C
a
t
 
=
 
{
 
i
c
o
n
:
 
M
e
s
s
a
g
e
S
q
u
a
r
e
,
 
c
o
l
o
r
:
 
"
t
e
x
t
-
g
r
e
e
n
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
"
,
 
f
i
l
l
:
 
"
b
g
-
g
r
e
e
n
-
5
0
0
"
 
}
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
b
-
1
2
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
A
p
t
i
t
u
d
e
 
P
r
a
c
t
i
c
e
 
-
 
Q
u
a
n
t
i
t
a
t
i
v
e
,
 
L
o
g
i
c
a
l
 
&
 
V
e
r
b
a
l
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
P
r
a
c
t
i
c
e
 
a
p
t
i
t
u
d
e
 
q
u
e
s
t
i
o
n
s
 
f
o
r
 
p
l
a
c
e
m
e
n
t
 
e
x
a
m
s
.
 
C
a
t
e
g
o
r
i
e
s
 
i
n
c
l
u
d
e
 
q
u
a
n
t
i
t
a
t
i
v
e
 
a
p
t
i
t
u
d
e
,
 
l
o
g
i
c
a
l
 
r
e
a
s
o
n
i
n
g
,
 
v
e
r
b
a
l
 
a
b
i
l
i
t
y
,
 
a
n
d
 
d
a
t
a
 
i
n
t
e
r
p
r
e
t
a
t
i
o
n
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
a
p
t
i
t
u
d
e
 
p
r
a
c
t
i
c
e
,
 
q
u
a
n
t
i
t
a
t
i
v
e
 
a
p
t
i
t
u
d
e
,
 
l
o
g
i
c
a
l
 
r
e
a
s
o
n
i
n
g
,
 
v
e
r
b
a
l
 
a
b
i
l
i
t
y
,
 
p
l
a
c
e
m
e
n
t
 
e
x
a
m
 
p
r
e
p
a
r
a
t
i
o
n
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
l
e
a
r
n
/
a
p
t
i
t
u
d
e
"
)
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
 
&
&
 
i
s
S
u
c
c
e
s
s
 
&
&
 
<
S
t
r
e
a
k
B
a
n
n
e
r
 
s
t
r
e
a
k
=
{
p
r
o
g
r
e
s
s
.
c
u
r
r
e
n
t
S
t
r
e
a
k
}
 
/
>
}




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
4
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
5
]
 
z
-
0
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
2
5
)
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
,


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
S
i
z
e
:
 
"
1
2
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
6
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
 
m
b
-
1
0
 
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
e
n
d
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
K
i
c
k
e
r
>
l
e
a
r
n
 
/
 
a
p
t
i
t
u
d
e
<
/
K
i
c
k
e
r
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
4
 
t
e
x
t
-
3
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
r
a
c
k
 
t
h
e
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
r
o
u
n
d
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
s
c
a
l
e
X
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
s
c
a
l
e
X
:
 
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
7
,
 
d
e
l
a
y
:
 
0
.
4
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
b
g
-
l
i
m
e
-
4
0
0
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
3
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
a
x
-
w
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
a
n
t
i
t
a
t
i
v
e
 
a
p
t
i
t
u
d
e
,
 
l
o
g
i
c
a
l
 
r
e
a
s
o
n
i
n
g
,
 
a
n
d
 
v
e
r
b
a
l
 
a
b
i
l
i
t
y
,
 
p
r
a
c
t
i
c
e
d
 
i
n
 
t
h
e
 
e
x
a
c
t
 
s
h
a
p
e
s
 
p
l
a
c
e
m
e
n
t
 
p
a
p
e
r
s
 
t
h
r
o
w
 
a
t
 
y
o
u
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
x
-
4
 
g
a
p
-
y
-
2
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
i
c
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
T
o
p
i
c
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
s
w
e
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
A
n
s
w
e
r
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
C
o
m
p
a
n
i
e
s
 
s
t
r
i
p
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
0
5
 
}
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
6
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
l
e
a
r
n
/
a
p
t
i
t
u
d
e
/
c
o
m
p
a
n
i
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
4
 
p
x
-
5
 
p
y
-
4
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
9
 
h
-
9
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
i
l
d
i
n
g
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>
C
o
m
p
a
n
y
-
w
i
s
e
 
q
u
e
s
t
i
o
n
 
b
a
n
k
s
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
c
s
 
/
 
i
n
f
y
 
/
 
w
i
p
r
o
 
/
 
a
c
c
e
n
t
u
r
e
 
/
 
c
o
g
n
i
z
a
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
O
v
e
r
a
l
l
 
p
r
o
g
r
e
s
s
 
+
 
c
a
t
e
g
o
r
y
 
b
r
e
a
k
d
o
w
n
 
*
/
}


 
 
 
 
 
 
 
 
{
u
s
e
r
 
&
&
 
p
r
o
g
r
e
s
s
 
&
&
 
c
a
t
e
g
o
r
i
e
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
0
8
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
8
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
p
x
-
5
 
p
y
-
5
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
=
{
o
v
e
r
a
l
l
P
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
{
6
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
C
l
a
s
s
N
a
m
e
=
"
s
t
r
o
k
e
-
l
i
m
e
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
c
k
C
l
a
s
s
N
a
m
e
=
"
s
t
r
o
k
e
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
s
t
r
o
k
e
-
s
t
o
n
e
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
C
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
v
e
r
a
l
l
 
p
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
1
 
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
A
n
s
w
e
r
e
d
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}
 
/
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
.
t
o
L
o
c
a
l
e
S
t
r
i
n
g
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
h
-
1
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
s
m
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
o
v
e
r
a
l
l
P
c
t
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
7
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
h
-
f
u
l
l
 
b
g
-
l
i
m
e
-
4
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
u
s
e
r
 
&
&
 
<
W
e
a
k
A
r
e
a
D
a
s
h
b
o
a
r
d
 
w
e
a
k
A
r
e
a
s
=
{
w
e
a
k
A
r
e
a
s
}
 
/
>
}




 
 
 
 
 
 
 
 
{
/
*
 
T
a
b
s
 
+
 
S
e
a
r
c
h
 
*
/
}


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
0
.
1
 
}
}


 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
m
b
-
8
 
s
p
a
c
e
-
y
-
4
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
c
l
a
s
s
N
a
m
e
=
"
a
b
s
o
l
u
t
e
 
l
e
f
t
-
4
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
e
a
r
c
h
 
t
o
p
i
c
s
.
.
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
t
o
p
i
c
S
e
a
r
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
T
o
p
i
c
S
e
a
r
c
h
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
p
l
-
1
1
 
p
r
-
4
 
p
y
-
3
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
e
r
-
s
t
o
n
e
-
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
r
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
 
/


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
[
{
 
k
e
y
:
 
"
a
l
l
"
,
 
l
a
b
e
l
:
 
"
A
l
l
"
 
}
,
 
.
.
.
(
c
a
t
e
g
o
r
i
e
s
?
.
m
a
p
(
(
c
)
 
=
>
 
(
{
 
k
e
y
:
 
c
.
s
l
u
g
,
 
l
a
b
e
l
:
 
c
.
n
a
m
e
 
}
)
)
 
?
?
 
[
]
)
]
.
m
a
p
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
(
t
a
b
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
a
c
t
i
v
e
T
a
b
 
=
=
=
 
t
a
b
.
k
e
y
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
a
b
.
k
e
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
6
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
2
,
 
d
u
r
a
t
i
o
n
:
 
0
.
2
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
A
c
t
i
v
e
T
a
b
(
t
a
b
.
k
e
y
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
b
o
r
d
e
r
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
g
-
t
r
a
n
s
p
a
r
e
n
t
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
h
o
v
e
r
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
a
b
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
h
a
s
F
i
l
t
e
r
s
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
o
n
C
l
i
c
k
=
{
c
l
e
a
r
F
i
l
t
e
r
s
}
 
v
a
r
i
a
n
t
=
"
g
h
o
s
t
"
 
s
i
z
e
=
"
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
 
h
-
3
"
 
/
>
 
c
l
e
a
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
e
n
d
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
4
 
m
b
-
6
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
h
-
1
 
w
-
1
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
p
i
c
s
 
/
 
{
a
c
t
i
v
e
T
a
b
 
=
=
=
 
"
a
l
l
"
 
?
 
"
a
l
l
"
 
:
 
a
c
t
i
v
e
T
a
b
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
c
l
a
s
s
N
a
m
e
=
"
m
t
-
2
 
t
e
x
t
-
2
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
r
a
c
t
i
c
e
 
t
o
p
i
c
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
h
i
d
d
e
n
 
s
m
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
T
o
p
i
c
s
.
l
e
n
g
t
h
}
 
t
o
p
i
c
{
f
i
l
t
e
r
e
d
T
o
p
i
c
s
.
l
e
n
g
t
h
 
=
=
=
 
1
 
?
 
"
"
 
:
 
"
s
"
}


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
T
o
p
i
c
 
l
i
s
t
 
*
/
}


 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
T
o
p
i
c
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
p
y
-
2
0
 
t
e
x
t
-
c
e
n
t
e
r
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
d
a
s
h
e
d
 
b
o
r
d
e
r
-
s
t
o
n
e
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
B
r
a
i
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
8
 
h
-
8
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
x
-
a
u
t
o
 
m
b
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
N
o
 
t
o
p
i
c
s
 
f
o
u
n
d
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
y
 
a
 
d
i
f
f
e
r
e
n
t
 
k
e
y
w
o
r
d
 
o
r
 
c
a
t
e
g
o
r
y


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
T
o
p
i
c
s
.
m
a
p
(
(
t
o
p
i
c
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
c
t
 
=
 
t
o
p
i
c
.
q
u
e
s
t
i
o
n
C
o
u
n
t
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
t
o
p
i
c
.
a
n
s
w
e
r
e
d
C
o
u
n
t
 
/
 
t
o
p
i
c
.
q
u
e
s
t
i
o
n
C
o
u
n
t
)
 
*
 
1
0
0
)
 
:
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
m
p
l
e
t
e
 
=
 
p
c
t
 
=
=
=
 
1
0
0
 
&
&
 
t
o
p
i
c
.
q
u
e
s
t
i
o
n
C
o
u
n
t
 
>
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
f
g
 
=
 
C
A
T
_
I
C
O
N
[
t
o
p
i
c
.
c
a
t
e
g
o
r
y
S
l
u
g
]
 
?
?
 
d
e
f
a
u
l
t
C
a
t
;




 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
o
p
i
c
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
e
l
a
y
:
 
M
a
t
h
.
m
i
n
(
i
d
x
,
 
1
0
)
 
*
 
0
.
0
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
`
/
l
e
a
r
n
/
a
p
t
i
t
u
d
e
/
$
{
t
o
p
i
c
.
s
l
u
g
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
4
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
p
x
-
5
 
p
y
-
4
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
=
{
p
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
{
4
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
W
i
d
t
h
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
C
l
a
s
s
N
a
m
e
=
{
i
s
C
o
m
p
l
e
t
e
 
?
 
"
s
t
r
o
k
e
-
l
i
m
e
-
5
0
0
"
 
:
 
"
s
t
r
o
k
e
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
s
t
r
o
k
e
-
s
t
o
n
e
-
5
0
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
c
k
C
l
a
s
s
N
a
m
e
=
"
s
t
r
o
k
e
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
s
t
r
o
k
e
-
s
t
o
n
e
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
C
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
1
 
h
-
1
1
 
s
h
r
i
n
k
-
0
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
1
p
x
]
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
a
b
u
l
a
r
-
n
u
m
s
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
S
t
r
i
n
g
(
i
d
x
 
+
 
1
)
.
p
a
d
S
t
a
r
t
(
2
,
 
"
0
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
-
1
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
t
r
u
n
c
a
t
e
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
m
p
l
e
t
e
 
&
&
 
u
s
e
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
t
e
x
t
-
l
i
m
e
-
5
0
0
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
m
t
-
1
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
{
`
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
$
{
c
f
g
.
c
o
l
o
r
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
p
i
c
.
c
a
t
e
g
o
r
y
N
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
"
>
·
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
 
?
 
`
$
{
t
o
p
i
c
.
a
n
s
w
e
r
e
d
C
o
u
n
t
}
 
/
 
$
{
t
o
p
i
c
.
q
u
e
s
t
i
o
n
C
o
u
n
t
}
`
 
:
 
`
$
{
t
o
p
i
c
.
q
u
e
s
t
i
o
n
C
o
u
n
t
}
 
Q
s
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
u
s
e
r
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
 
h
-
1
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
8
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
s
m
 
m
t
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
d
e
l
a
y
:
 
M
a
t
h
.
m
i
n
(
i
d
x
,
 
1
0
)
 
*
 
0
.
0
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
h
-
f
u
l
l
 
$
{
i
s
C
o
m
p
l
e
t
e
 
?
 
"
b
g
-
l
i
m
e
-
4
0
0
"
 
:
 
p
c
t
 
>
 
0
 
?
 
"
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
"
 
:
 
"
b
g
-
t
r
a
n
s
p
a
r
e
n
t
"
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}


