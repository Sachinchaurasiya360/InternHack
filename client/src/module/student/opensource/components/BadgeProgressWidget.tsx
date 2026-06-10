
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
 
A
w
a
r
d
,
 
C
h
e
v
r
o
n
R
i
g
h
t
,
 
C
i
r
c
l
e
 
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




c
o
n
s
t
 
T
I
E
R
_
O
R
D
E
R
 
=
 
[
"
F
i
r
s
t
 
S
t
e
p
s
"
,
 
"
C
o
n
t
r
i
b
u
t
o
r
"
,
 
"
A
c
t
i
v
e
 
C
o
n
t
r
i
b
u
t
o
r
"
,
 
"
O
S
S
 
L
e
a
d
e
r
"
,
 
"
A
m
b
a
s
s
a
d
o
r
"
]
;




c
o
n
s
t
 
T
I
E
R
_
C
O
L
O
R
S
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
 
b
g
:
 
s
t
r
i
n
g
;
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
b
o
r
d
e
r
:
 
s
t
r
i
n
g
;
 
a
c
c
e
n
t
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


 
 
"
F
i
r
s
t
 
S
t
e
p
s
"
:
 
{


 
 
 
 
b
g
:
 
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
5
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
/
5
0
"
,


 
 
 
 
t
e
x
t
:
 
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
,


 
 
 
 
b
o
r
d
e
r
:
 
"
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
8
0
0
"
,


 
 
 
 
a
c
c
e
n
t
:
 
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
4
0
0
"


 
 
}
,


 
 
"
C
o
n
t
r
i
b
u
t
o
r
"
:
 
{


 
 
 
 
b
g
:
 
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
,


 
 
 
 
t
e
x
t
:
 
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
"
,


 
 
 
 
b
o
r
d
e
r
:
 
"
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
s
t
o
n
e
-
7
0
0
"
,


 
 
 
 
a
c
c
e
n
t
:
 
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
5
0
0
"


 
 
}
,


 
 
"
A
c
t
i
v
e
 
C
o
n
t
r
i
b
u
t
o
r
"
:
 
{


 
 
 
 
b
g
:
 
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
2
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
7
0
0
"
,


 
 
 
 
t
e
x
t
:
 
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
2
0
0
"
,


 
 
 
 
b
o
r
d
e
r
:
 
"
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
6
0
0
"
,


 
 
 
 
a
c
c
e
n
t
:
 
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
6
0
0
"


 
 
}
,


 
 
"
O
S
S
 
L
e
a
d
e
r
"
:
 
{


 
 
 
 
b
g
:
 
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
3
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
6
0
0
"
,


 
 
 
 
t
e
x
t
:
 
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
1
0
0
"
,


 
 
 
 
b
o
r
d
e
r
:
 
"
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
"
,


 
 
 
 
a
c
c
e
n
t
:
 
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
7
0
0
"


 
 
}
,


 
 
"
A
m
b
a
s
s
a
d
o
r
"
:
 
{


 
 
 
 
b
g
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
4
0
0
"
,


 
 
 
 
t
e
x
t
:
 
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
"
,


 
 
 
 
b
o
r
d
e
r
:
 
"
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
5
0
0
"
,


 
 
 
 
a
c
c
e
n
t
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
4
0
0
"


 
 
}


}
;




c
o
n
s
t
 
T
I
E
R
_
R
E
Q
S
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
 
s
t
r
i
n
g
[
]
>
 
=
 
{


 
 
"
F
i
r
s
t
 
S
t
e
p
s
"
:
 
[
"
C
o
m
p
l
e
t
e
 
a
t
 
l
e
a
s
t
 
1
 
g
u
i
d
e
"
]
,


 
 
"
C
o
n
t
r
i
b
u
t
o
r
"
:
 
[
"
C
o
m
p
l
e
t
e
 
F
i
r
s
t
 
P
R
 
R
o
a
d
m
a
p
"
,
 
"
1
+
 
A
p
p
r
o
v
e
d
 
R
e
p
o
 
C
o
n
t
r
i
b
u
t
i
o
n
"
]
,


 
 
"
A
c
t
i
v
e
 
C
o
n
t
r
i
b
u
t
o
r
"
:
 
[
"
3
+
 
G
u
i
d
e
s
 
C
o
m
p
l
e
t
e
d
"
,
 
"
5
+
 
A
p
p
r
o
v
e
d
 
R
e
p
o
 
C
o
n
t
r
i
b
u
t
i
o
n
s
"
]
,


 
 
"
O
S
S
 
L
e
a
d
e
r
"
:
 
[
"
P
r
o
g
r
a
m
 
P
a
r
t
i
c
i
p
a
n
t
 
(
G
S
o
C
/
O
u
t
r
e
a
c
h
y
/
L
F
X
)
"
,
 
"
1
0
+
 
A
p
p
r
o
v
e
d
 
R
e
p
o
 
C
o
n
t
r
i
b
u
t
i
o
n
s
"
]
,


 
 
"
A
m
b
a
s
s
a
d
o
r
"
:
 
[
"
V
e
r
i
f
i
e
d
 
A
m
b
a
s
s
a
d
o
r
 
S
t
a
t
u
s
"
]


}
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
B
a
d
g
e
P
r
o
g
r
e
s
s
W
i
d
g
e
t
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
 
c
u
r
r
e
n
t
T
i
e
r
 
=
 
u
s
e
r
?
.
o
s
s
T
i
e
r
 
|
|
 
"
F
i
r
s
t
 
S
t
e
p
s
"
;


 
 
c
o
n
s
t
 
t
i
e
r
I
n
d
e
x
 
=
 
T
I
E
R
_
O
R
D
E
R
.
i
n
d
e
x
O
f
(
c
u
r
r
e
n
t
T
i
e
r
)
;


 
 
c
o
n
s
t
 
n
e
x
t
T
i
e
r
 
=
 
T
I
E
R
_
O
R
D
E
R
[
t
i
e
r
I
n
d
e
x
 
+
 
1
]
;




 
 
c
o
n
s
t
 
c
o
l
o
r
s
 
=
 
T
I
E
R
_
C
O
L
O
R
S
[
c
u
r
r
e
n
t
T
i
e
r
]
 
|
|
 
T
I
E
R
_
C
O
L
O
R
S
[
"
F
i
r
s
t
 
S
t
e
p
s
"
]
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
 
p
-
4
 
s
m
:
p
-
5
 
$
{
c
o
l
o
r
s
.
b
g
}
 
$
{
c
o
l
o
r
s
.
b
o
r
d
e
r
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
-
a
l
l
`
}


 
 
 
 
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
c
o
l
 
s
m
:
f
l
e
x
-
r
o
w
 
s
m
:
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
1
2
 
h
-
1
2
 
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
a
d
o
w
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
A
w
a
r
d
 
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
w
-
7
 
h
-
7
 
$
{
c
o
l
o
r
s
.
t
e
x
t
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


 
 
 
 
 
 
 
 
 
 
<
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
b
-
0
.
5
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
O
S
S
 
R
e
a
d
y
 
B
a
d
g
e
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
{
`
p
x
-
1
.
5
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
 
t
e
x
t
-
[
9
p
x
]
 
f
o
n
t
-
b
o
l
d
 
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
t
i
g
h
t
e
r
 
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
w
h
i
t
e
/
1
0
 
$
{
c
o
l
o
r
s
.
t
e
x
t
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
i
e
r
 
{
t
i
e
r
I
n
d
e
x
 
+
 
1
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
{
`
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
 
$
{
c
o
l
o
r
s
.
t
e
x
t
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
u
r
r
e
n
t
T
i
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
L
i
n
k
 
t
o
=
"
/
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
a
n
a
l
y
t
i
c
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
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
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
i
d
d
e
n
 
s
m
:
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
 
b
g
-
w
h
i
t
e
/
5
0
 
d
a
r
k
:
b
g
-
b
l
a
c
k
/
2
0
 
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
2
0
 
h
o
v
e
r
:
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
h
o
v
e
r
:
b
g
-
b
l
a
c
k
/
4
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
J
o
u
r
n
e
y
 
<
C
h
e
v
r
o
n
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
3
.
5
 
h
-
3
.
5
 
m
l
-
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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
5
 
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


 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
g
r
e
s
s
 
B
a
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
s
p
a
c
e
-
y
-
1
.
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
>
O
v
e
r
a
l
l
 
P
a
t
h
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
{
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
(
t
i
e
r
I
n
d
e
x
 
+
 
1
)
 
/
 
T
I
E
R
_
O
R
D
E
R
.
l
e
n
g
t
h
)
 
*
 
1
0
0
)
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
h
-
1
.
5
 
w
-
f
u
l
l
 
b
g
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
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
(
(
t
i
e
r
I
n
d
e
x
 
+
 
1
)
 
/
 
T
I
E
R
_
O
R
D
E
R
.
l
e
n
g
t
h
)
 
*
 
1
0
0
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
 
1
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
c
o
l
o
r
s
.
a
c
c
e
n
t
}
 
r
o
u
n
d
e
d
-
f
u
l
l
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
N
e
x
t
 
O
b
j
e
c
t
i
v
e
s
 
*
/
}


 
 
 
 
 
 
 
 
{
n
e
x
t
T
i
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
m
t
-
4
 
p
t
-
4
 
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
b
l
a
c
k
/
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
5
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
b
-
3
"
>
N
e
x
t
 
O
b
j
e
c
t
i
v
e
s
:
 
{
n
e
x
t
T
i
e
r
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
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
T
I
E
R
_
R
E
Q
S
[
n
e
x
t
T
i
e
r
]
?
.
m
a
p
(
(
r
e
q
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
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
g
-
w
h
i
t
e
/
4
0
 
d
a
r
k
:
b
g
-
b
l
a
c
k
/
1
0
 
p
x
-
3
 
p
y
-
2
 
r
o
u
n
d
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
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
w
-
3
 
h
-
3
 
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
s
p
a
n
>
{
r
e
q
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
/
d
i
v
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
s
t
u
d
e
n
t
/
o
p
e
n
s
o
u
r
c
e
/
a
n
a
l
y
t
i
c
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
 
s
m
:
h
i
d
d
e
n
 
m
t
-
4
 
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
o
u
t
l
i
n
e
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
 
b
g
-
w
h
i
t
e
/
5
0
 
d
a
r
k
:
b
g
-
b
l
a
c
k
/
2
0
 
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
2
0
"
>


 
 
 
 
 
 
 
 
 
 
V
i
e
w
 
J
o
u
r
n
e
y
 
<
C
h
e
v
r
o
n
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
3
.
5
 
h
-
3
.
5
 
m
l
-
1
"
 
/
>


 
 
 
 
 
 
 
 
<
/
B
u
t
t
o
n
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


