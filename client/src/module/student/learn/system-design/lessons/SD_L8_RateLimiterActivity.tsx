
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
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
,
 
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
 
B
o
o
k
O
p
e
n
,
 
G
l
o
b
e
,
 
P
a
u
s
e
,
 
P
l
a
y
,
 
R
o
t
a
t
e
C
c
w
,
 
S
e
r
v
e
r
 
a
s
 
S
e
r
v
e
r
I
c
o
n
,
 
Z
a
p
 
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
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
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
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
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
@
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
W
A
R
N
 
=
 
"
#
f
5
9
e
0
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




c
o
n
s
t
 
s
e
c
t
i
o
n
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
1
2
p
x
"
,


}
;


c
o
n
s
t
 
s
e
c
t
i
o
n
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
f
o
n
t
F
a
m
i
l
y
:
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
m
a
r
g
i
n
:
 
"
0
 
0
 
2
0
p
x
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
F
r
a
m
e
w
o
r
k
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
S
T
E
P
S
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
1
.
 
R
e
q
u
i
r
e
m
e
n
t
s
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
F
u
n
c
t
i
o
n
a
l
:
 
l
i
m
i
t
 
e
a
c
h
 
u
s
e
r
 
/
 
A
P
I
 
k
e
y
 
t
o
 
N
 
r
e
q
u
e
s
t
s
 
p
e
r
 
w
i
n
d
o
w
.
 
C
o
m
m
o
n
 
q
u
o
t
a
s
:
 
1
0
0
/
m
i
n
,
 
1
0
k
/
h
o
u
r
,
 
1
M
/
d
a
y
.
"
,


 
 
 
 
 
 
"
N
o
n
-
f
u
n
c
t
i
o
n
a
l
:
 
l
i
m
i
t
e
r
 
c
h
e
c
k
 
<
 
5
m
s
,
 
f
a
i
r
 
a
c
r
o
s
s
 
m
u
l
t
i
p
l
e
 
s
e
r
v
e
r
s
,
 
a
c
c
u
r
a
t
e
 
t
o
 
w
i
t
h
i
n
 
~
1
%
.
"
,


 
 
 
 
 
 
"
O
u
t
 
o
f
 
s
c
o
p
e
 
(
t
h
e
 
e
a
s
y
 
v
e
r
s
i
o
n
)
:
 
p
e
r
-
e
n
d
p
o
i
n
t
 
q
u
o
t
a
s
,
 
d
y
n
a
m
i
c
 
t
i
e
r
 
u
p
g
r
a
d
e
s
,
 
c
o
s
t
-
p
e
r
-
r
e
q
u
e
s
t
 
w
e
i
g
h
t
i
n
g
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
2
.
 
E
s
t
i
m
a
t
i
o
n
"
,


 
 
 
 
c
o
l
o
r
:
 
W
A
R
N
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
1
0
0
M
 
u
s
e
r
s
 
×
 
1
0
 
r
e
q
s
/
s
e
c
/
u
s
e
r
 
p
e
a
k
 
→
 
1
B
 
c
h
e
c
k
s
/
s
e
c
 
(
m
o
s
t
 
a
p
p
s
 
f
a
r
 
l
e
s
s
;
 
t
h
i
s
 
i
s
 
t
h
e
 
u
p
p
e
r
 
b
o
u
n
d
)
.
"
,


 
 
 
 
 
 
"
L
i
m
i
t
e
r
 
s
t
a
t
e
:
 
p
e
r
-
u
s
e
r
 
(
k
e
y
,
 
c
o
u
n
t
,
 
r
e
s
e
t
_
t
i
m
e
)
 
≈
 
6
4
 
b
y
t
e
s
.
 
1
0
0
M
 
u
s
e
r
s
 
→
 
6
 
G
B
 
t
o
t
a
l
 
—
 
f
i
t
s
 
i
n
 
R
e
d
i
s
.
"
,


 
 
 
 
 
 
"
L
a
t
e
n
c
y
 
b
u
d
g
e
t
:
 
l
i
m
i
t
e
r
 
c
h
e
c
k
 
+
 
d
o
w
n
s
t
r
e
a
m
 
c
a
l
l
 
m
u
s
t
 
f
i
t
 
i
n
 
A
P
I
 
r
e
s
p
o
n
s
e
 
S
L
A
.
 
5
m
s
 
f
o
r
 
t
h
e
 
l
i
m
i
t
e
r
 
i
s
 
t
h
e
 
t
a
r
g
e
t
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
3
.
 
A
P
I
 
+
 
D
a
t
a
 
M
o
d
e
l
"
,


 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
P
e
r
-
u
s
e
r
:
 
k
e
y
 
=
 
`
r
l
:
u
s
e
r
:
{
u
s
e
r
_
i
d
}
`
.
 
V
a
l
u
e
 
=
 
(
c
o
u
n
t
,
 
w
i
n
d
o
w
_
s
t
a
r
t
)
 
o
r
 
t
o
k
e
n
_
b
u
c
k
e
t
(
t
o
k
e
n
s
,
 
l
a
s
t
_
r
e
f
i
l
l
)
.
"
,


 
 
 
 
 
 
"
L
u
a
 
s
c
r
i
p
t
 
f
o
r
 
a
t
o
m
i
c
 
c
h
e
c
k
-
a
n
d
-
d
e
c
r
e
m
e
n
t
 
o
n
 
R
e
d
i
s
.
"
,


 
 
 
 
 
 
"
S
l
i
d
i
n
g
 
w
i
n
d
o
w
 
l
o
g
:
 
s
o
r
t
e
d
 
s
e
t
 
o
f
 
t
i
m
e
s
t
a
m
p
s
,
 
Z
R
A
N
G
E
B
Y
S
C
O
R
E
 
f
o
r
 
a
c
c
u
r
a
t
e
 
c
o
u
n
t
s
.
"
,


 
 
 
 
]
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
4
.
 
H
i
g
h
-
l
e
v
e
l
 
D
i
a
g
r
a
m
"
,


 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
i
t
e
m
s
:
 
[


 
 
 
 
 
 
"
T
i
e
r
 
1
 
(
e
d
g
e
)
:
 
c
o
a
r
s
e
 
I
P
-
b
a
s
e
d
 
l
i
m
i
t
i
n
g
 
a
t
 
t
h
e
 
C
D
N
.
"
,


 
 
 
 
 
 
"
T
i
e
r
 
2
 
(
g
a
t
e
w
a
y
)
:
 
p
e
r
-
A
P
I
-
k
e
y
 
c
h
e
c
k
 
v
i
a
 
R
e
d
i
s
 
L
u
a
.
 
S
u
b
-
5
m
s
.
"
,


 
 
 
 
 
 
"
T
i
e
r
 
3
 
(
s
e
r
v
i
c
e
)
:
 
f
i
n
e
-
g
r
a
i
n
e
d
 
p
e
r
-
e
n
d
p
o
i
n
t
 
v
i
a
 
i
n
-
m
e
m
o
r
y
 
t
o
k
e
n
 
b
u
c
k
e
t
s
,
 
s
y
n
c
'
d
 
v
i
a
 
R
e
d
i
s
 
f
o
r
 
c
l
u
s
t
e
r
-
w
i
d
e
 
a
c
c
u
r
a
c
y
.
"
,


 
 
 
 
]
,


 
 
}
,


]
;




f
u
n
c
t
i
o
n
 
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
(
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
4
-
s
t
e
p
 
f
r
a
m
e
w
o
r
k
,
 
a
p
p
l
i
e
d
 
t
o
 
a
 
d
i
s
t
r
i
b
u
t
e
d
 
r
a
t
e
 
l
i
m
i
t
e
r
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
L
5
.
6
 
i
n
t
r
o
d
u
c
e
d
 
t
h
e
 
a
l
g
o
r
i
t
h
m
s
 
(
t
o
k
e
n
 
b
u
c
k
e
t
,
 
l
e
a
k
y
 
b
u
c
k
e
t
,
 
s
l
i
d
i
n
g
 
w
i
n
d
o
w
)
.
 
T
h
i
s
 
l
e
s
s
o
n


 
 
 
 
 
 
 
 
i
s
 
a
b
o
u
t
 
<
i
>
p
r
o
d
u
c
t
i
o
n
i
z
i
n
g
<
/
i
>
 
t
h
e
m
 
a
c
r
o
s
s
 
a
 
f
l
e
e
t
 
—
 
a
t
o
m
i
c
 
R
e
d
i
s
 
o
p
e
r
a
t
i
o
n
s
,
 
s
h
a
r
d
i
n
g
,


 
 
 
 
 
 
 
 
m
u
l
t
i
-
t
i
e
r
 
d
e
f
e
n
s
e
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
1
 
}
 
}
 
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
S
T
E
P
S
.
m
a
p
(
(
s
)
 
=
>
 
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
s
.
k
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
2
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
5
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
6
p
x
 
1
8
p
x
"
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
s
.
c
o
l
o
r
}
5
5
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
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
:
 
`
$
{
s
.
c
o
l
o
r
}
0
8
`
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
s
.
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
4
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
k
.
t
o
U
p
p
e
r
C
a
s
e
(
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
u
l
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
0
,
 
p
a
d
d
i
n
g
:
 
0
,
 
l
i
s
t
S
t
y
l
e
:
 
"
n
o
n
e
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,
 
g
a
p
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
i
t
e
m
s
.
m
a
p
(
(
i
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
i
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
8
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
s
.
c
o
l
o
r
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
 
}
}
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
>
{
i
t
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
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
)
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
P
e
r
-
i
n
s
t
a
n
c
e
 
v
s
 
d
i
s
t
r
i
b
u
t
e
d
 
c
o
m
p
a
r
i
s
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
M
o
d
e
 
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
|
 
"
r
e
d
i
s
-
s
h
a
r
e
d
"
;


c
o
n
s
t
 
L
I
M
I
T
 
=
 
1
0
;


c
o
n
s
t
 
W
I
N
D
O
W
_
M
S
 
=
 
1
0
0
0
;




i
n
t
e
r
f
a
c
e
 
S
e
r
v
e
r
 
{
 
i
d
:
 
n
u
m
b
e
r
;
 
c
o
u
n
t
e
r
:
 
n
u
m
b
e
r
;
 
r
e
s
e
t
A
t
:
 
n
u
m
b
e
r
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
 
D
i
s
t
r
i
b
u
t
e
d
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
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
M
o
d
e
>
(
"
p
e
r
-
i
n
s
t
a
n
c
e
"
)
;


 
 
c
o
n
s
t
 
[
s
e
r
v
e
r
s
,
 
s
e
t
S
e
r
v
e
r
s
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
S
e
r
v
e
r
[
]
>
(
(
)
 
=
>
 
[
{
 
i
d
:
 
1
,
 
c
o
u
n
t
e
r
:
 
0
,
 
r
e
s
e
t
A
t
:
 
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
 
}
,
 
{
 
i
d
:
 
2
,
 
c
o
u
n
t
e
r
:
 
0
,
 
r
e
s
e
t
A
t
:
 
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
 
}
,
 
{
 
i
d
:
 
3
,
 
c
o
u
n
t
e
r
:
 
0
,
 
r
e
s
e
t
A
t
:
 
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
 
}
]
)
;


 
 
c
o
n
s
t
 
[
r
e
d
i
s
C
o
u
n
t
e
r
,
 
s
e
t
R
e
d
i
s
C
o
u
n
t
e
r
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
0
)
;


 
 
c
o
n
s
t
 
[
r
e
d
i
s
R
e
s
e
t
A
t
,
 
s
e
t
R
e
d
i
s
R
e
s
e
t
A
t
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
(
)
 
=
>
 
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
i
n
g
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
s
t
a
t
s
,
 
s
e
t
S
t
a
t
s
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
{
 
t
o
t
a
l
R
e
q
u
e
s
t
s
:
 
0
,
 
a
l
l
o
w
e
d
:
 
0
,
 
b
l
o
c
k
e
d
:
 
0
 
}
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
r
u
n
n
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
;


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
/
/
 
s
i
m
u
l
a
t
e
 
3
0
 
i
n
c
o
m
i
n
g
 
r
e
q
u
e
s
t
s
 
p
e
r
 
s
e
c
o
n
d
 
a
c
r
o
s
s
 
3
 
s
e
r
v
e
r
s


 
 
 
 
 
 
c
o
n
s
t
 
r
e
q
s
T
h
i
s
T
i
c
k
 
=
 
6
;


 
 
 
 
 
 
l
e
t
 
a
l
l
o
w
e
d
 
=
 
0
;


 
 
 
 
 
 
l
e
t
 
b
l
o
c
k
e
d
 
=
 
0
;




 
 
 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
)
 
{


 
 
 
 
 
 
 
 
s
e
t
S
e
r
v
e
r
s
(
(
s
v
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
o
w
 
=
 
D
a
t
e
.
n
o
w
(
)
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
s
v
.
m
a
p
(
(
s
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
i
d
x
 
>
=
 
r
e
q
s
T
h
i
s
T
i
c
k
 
/
 
2
)
 
r
e
t
u
r
n
 
s
;


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
r
e
s
e
t
 
i
f
 
w
i
n
d
o
w
 
e
x
p
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
c
o
u
n
t
e
r
 
=
 
s
.
c
o
u
n
t
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
 
r
e
s
e
t
A
t
 
=
 
s
.
r
e
s
e
t
A
t
;


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
n
o
w
 
>
 
r
e
s
e
t
A
t
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
u
n
t
e
r
 
=
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t
A
t
 
=
 
n
o
w
 
+
 
W
I
N
D
O
W
_
M
S
;


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
2
 
r
e
q
u
e
s
t
s
 
o
n
 
t
h
i
s
 
s
e
r
v
e
r
 
t
h
i
s
 
t
i
c
k


 
 
 
 
 
 
 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
2
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
c
o
u
n
t
e
r
 
<
 
L
I
M
I
T
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
u
n
t
e
r
+
+
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
+
+
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
e
d
+
+
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
.
.
.
s
,
 
c
o
u
n
t
e
r
,
 
r
e
s
e
t
A
t
 
}
;


 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
s
e
t
R
e
d
i
s
C
o
u
n
t
e
r
(
(
c
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
l
e
t
 
c
o
u
n
t
e
r
 
=
 
c
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
o
w
 
=
 
D
a
t
e
.
n
o
w
(
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
n
o
w
 
>
 
r
e
d
i
s
R
e
s
e
t
A
t
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
u
n
t
e
r
 
=
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
R
e
d
i
s
R
e
s
e
t
A
t
(
n
o
w
 
+
 
W
I
N
D
O
W
_
M
S
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
r
e
q
s
T
h
i
s
T
i
c
k
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
i
f
 
(
c
o
u
n
t
e
r
 
<
 
L
I
M
I
T
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
u
n
t
e
r
+
+
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
l
o
w
e
d
+
+
;


 
 
 
 
 
 
 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
l
o
c
k
e
d
+
+
;


 
 
 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
c
o
u
n
t
e
r
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}




 
 
 
 
 
 
s
e
t
S
t
a
t
s
(
(
s
)
 
=
>
 
(
{
 
t
o
t
a
l
R
e
q
u
e
s
t
s
:
 
s
.
t
o
t
a
l
R
e
q
u
e
s
t
s
 
+
 
r
e
q
s
T
h
i
s
T
i
c
k
,
 
a
l
l
o
w
e
d
:
 
s
.
a
l
l
o
w
e
d
 
+
 
a
l
l
o
w
e
d
,
 
b
l
o
c
k
e
d
:
 
s
.
b
l
o
c
k
e
d
 
+
 
b
l
o
c
k
e
d
 
}
)
)
;


 
 
 
 
}
,
 
2
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
m
o
d
e
,
 
r
e
d
i
s
R
e
s
e
t
A
t
]
)
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
e
r
v
e
r
s
(
[
{
 
i
d
:
 
1
,
 
c
o
u
n
t
e
r
:
 
0
,
 
r
e
s
e
t
A
t
:
 
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
 
}
,
 
{
 
i
d
:
 
2
,
 
c
o
u
n
t
e
r
:
 
0
,
 
r
e
s
e
t
A
t
:
 
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
 
}
,
 
{
 
i
d
:
 
3
,
 
c
o
u
n
t
e
r
:
 
0
,
 
r
e
s
e
t
A
t
:
 
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
 
}
]
)
;


 
 
 
 
s
e
t
R
e
d
i
s
C
o
u
n
t
e
r
(
0
)
;


 
 
 
 
s
e
t
R
e
d
i
s
R
e
s
e
t
A
t
(
D
a
t
e
.
n
o
w
(
)
 
+
 
W
I
N
D
O
W
_
M
S
)
;


 
 
 
 
s
e
t
S
t
a
t
s
(
{
 
t
o
t
a
l
R
e
q
u
e
s
t
s
:
 
0
,
 
a
l
l
o
w
e
d
:
 
0
,
 
b
l
o
c
k
e
d
:
 
0
 
}
)
;


 
 
 
 
s
e
t
R
u
n
n
i
n
g
(
f
a
l
s
e
)
;


 
 
}
;




 
 
c
o
n
s
t
 
e
f
f
e
c
t
i
v
e
L
i
m
i
t
 
=
 
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
L
I
M
I
T
 
*
 
s
e
r
v
e
r
s
.
l
e
n
g
t
h
 
:
 
L
I
M
I
T
;


 
 
c
o
n
s
t
 
i
s
L
e
a
k
y
 
=
 
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
r
e
e
 
s
e
r
v
e
r
s
.
 
O
n
e
 
u
s
e
r
.
 
O
n
e
 
q
u
o
t
a
 
o
f
 
{
L
I
M
I
T
}
/
s
e
c
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
o
g
g
l
e
 
b
e
t
w
e
e
n
 
p
e
r
-
i
n
s
t
a
n
c
e
 
c
o
u
n
t
e
r
s
 
(
e
a
c
h
 
s
e
r
v
e
r
 
t
r
a
c
k
s
 
i
n
d
e
p
e
n
d
e
n
t
l
y
)
 
v
s
 
R
e
d
i
s
-
s
h
a
r
e
d


 
 
 
 
 
 
 
 
c
o
u
n
t
e
r
s
 
(
a
t
o
m
i
c
 
L
u
a
 
c
h
e
c
k
)
.
 
W
i
t
h
 
p
e
r
-
i
n
s
t
a
n
c
e
,
 
t
h
e
 
u
s
e
r
 
e
f
f
e
c
t
i
v
e
l
y
 
g
e
t
s
 
3
×
 
t
h
e
 
l
i
m
i
t
.


 
 
 
 
 
 
 
 
W
i
t
h
 
R
e
d
i
s
,
 
t
h
e
 
l
i
m
i
t
 
i
s
 
h
o
n
o
r
e
d
 
c
l
u
s
t
e
r
-
w
i
d
e
.


 
 
 
 
 
 
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
5
 
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
s
t
r
a
t
e
g
y
:
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
{
(
[
"
p
e
r
-
i
n
s
t
a
n
c
e
"
,
 
"
r
e
d
i
s
-
s
h
a
r
e
d
"
]
 
a
s
 
M
o
d
e
[
]
)
.
m
a
p
(
(
m
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
 
m
o
d
e
 
=
=
=
 
m
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
m
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
W
A
R
N
 
:
 
S
D
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
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
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{
 
s
e
t
M
o
d
e
(
m
)
;
 
r
e
s
e
t
(
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
r
u
n
n
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
r
u
n
n
i
n
g
 
?
 
"
n
o
t
-
a
l
l
o
w
e
d
"
 
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
c
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
}
`
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
:
 
a
c
t
i
v
e
 
?
 
`
$
{
c
}
1
8
`
 
:
 
"
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
c
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
:
 
r
u
n
n
i
n
g
 
?
 
0
.
5
 
:
 
1
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
"
P
e
r
-
i
n
s
t
a
n
c
e
 
(
b
r
o
k
e
n
)
"
 
:
 
"
R
e
d
i
s
-
s
h
a
r
e
d
 
(
c
o
r
r
e
c
t
)
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
:
 
"
#
0
b
1
2
2
0
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
 
}
}
>


 
 
 
 
 
 
 
 
{
/
*
 
S
e
r
v
e
r
s
 
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
3
 
g
a
p
-
3
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
s
e
r
v
e
r
s
.
m
a
p
(
(
s
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
 
M
a
t
h
.
m
i
n
(
1
0
0
,
 
(
s
.
c
o
u
n
t
e
r
 
/
 
L
I
M
I
T
)
 
*
 
1
0
0
)
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
 
k
e
y
=
{
s
.
i
d
}
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
(
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
W
A
R
N
 
:
 
S
D
)
}
3
3
`
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
:
 
`
$
{
(
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
W
A
R
N
 
:
 
S
D
)
}
1
0
`
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
r
v
e
r
I
c
o
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
3
.
5
 
h
-
3
.
5
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>
S
E
R
V
E
R
 
{
s
.
i
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
6
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
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
3
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
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
1
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
"
1
0
0
%
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
:
 
p
c
t
 
>
=
 
1
0
0
 
?
 
W
A
R
N
 
:
 
S
D
 
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
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
u
n
t
e
r
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
p
c
t
 
>
=
 
1
0
0
 
?
 
W
A
R
N
 
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
s
.
c
o
u
n
t
e
r
}
<
/
s
p
a
n
>
 
/
 
{
L
I
M
I
T
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
l
e
g
a
t
e
s
 
t
o
 
R
e
d
i
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
R
e
d
i
s
 
(
i
f
 
s
h
a
r
e
d
)
 
*
/
}


 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
r
e
d
i
s
-
s
h
a
r
e
d
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
S
D
}
5
5
`
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
:
 
`
$
{
S
D
}
1
4
`
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
8
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
Z
a
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
"
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
S
D
 
}
}
>
R
E
D
I
S
 
·
 
a
t
o
m
i
c
 
L
u
a
 
c
h
e
c
k
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
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
8
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
:
 
"
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
3
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
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
M
a
t
h
.
m
i
n
(
1
0
0
,
 
(
r
e
d
i
s
C
o
u
n
t
e
r
 
/
 
L
I
M
I
T
)
 
*
 
1
0
0
)
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
1
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}
 
s
t
y
l
e
=
{
{
 
h
e
i
g
h
t
:
 
"
1
0
0
%
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
:
 
r
e
d
i
s
C
o
u
n
t
e
r
 
>
=
 
L
I
M
I
T
 
?
 
W
A
R
N
 
:
 
S
D
 
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
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
h
a
r
e
d
 
c
o
u
n
t
e
r
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
r
e
d
i
s
C
o
u
n
t
e
r
 
>
=
 
L
I
M
I
T
 
?
 
W
A
R
N
 
:
 
S
D
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
 
}
}
>
{
r
e
d
i
s
C
o
u
n
t
e
r
}
<
/
s
p
a
n
>
 
/
 
{
L
I
M
I
T
}
 
p
e
r
 
s
e
c
o
n
d


 
 
 
 
 
 
 
 
 
 
 
 
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




 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
s
 
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
4
 
g
a
p
-
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
e
f
f
e
c
t
i
v
e
 
l
i
m
i
t
/
s
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
e
f
f
e
c
t
i
v
e
L
i
m
i
t
)
}
 
c
o
l
o
r
=
{
i
s
L
e
a
k
y
 
?
 
W
A
R
N
 
:
 
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
r
e
q
u
e
s
t
s
 
s
e
n
t
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
s
t
a
t
s
.
t
o
t
a
l
R
e
q
u
e
s
t
s
)
}
 
c
o
l
o
r
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
a
l
l
o
w
e
d
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
s
t
a
t
s
.
a
l
l
o
w
e
d
)
}
 
c
o
l
o
r
=
{
S
D
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
b
l
o
c
k
e
d
"
 
v
a
l
u
e
=
{
S
t
r
i
n
g
(
s
t
a
t
s
.
b
l
o
c
k
e
d
)
}
 
c
o
l
o
r
=
{
W
A
R
N
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
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
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
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
<
P
a
u
s
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
.
5
 
h
-
3
.
5
"
 
/
>
 
:
 
<
P
l
a
y
 
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
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
"
s
e
n
d
 
3
0
 
r
e
q
/
s
"
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
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
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
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
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


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
m
o
d
e
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


 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
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
 
-
6
 
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
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
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
:
 
`
$
{
(
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
W
A
R
N
 
:
 
S
D
)
}
1
4
`
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
(
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
W
A
R
N
 
:
 
S
D
)
}
5
5
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
W
A
R
N
 
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"
 
?
 
"
B
R
O
K
E
N
"
 
:
 
"
C
O
R
R
E
C
T
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
p
e
r
-
i
n
s
t
a
n
c
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
E
a
c
h
 
s
e
r
v
e
r
 
o
n
l
y
 
s
e
e
s
 
i
t
s
 
o
w
n
 
s
l
i
c
e
.
 
T
h
e
 
u
s
e
r
 
i
s
 
s
u
p
p
o
s
e
d
 
t
o
 
g
e
t
 
1
0
 
r
e
q
/
s
 
—
 
t
h
e
y
'
r
e
 
a
c
t
u
a
l
l
y
 
g
e
t
t
i
n
g
 
u
p
 
t
o
 
3
0
 
(
3
×
 
t
h
e
 
c
o
n
f
i
g
u
r
e
d
 
l
i
m
i
t
)
.
 
T
h
i
s
 
i
s
 
t
h
e
 
s
i
l
e
n
t
 
b
u
g
 
b
e
h
i
n
d
 
e
v
e
r
y
 
h
o
r
i
z
o
n
t
a
l
l
y
-
s
c
a
l
e
d
 
s
e
r
v
i
c
e
 
t
h
a
t
 
u
s
e
s
 
l
o
c
a
l
 
c
o
u
n
t
e
r
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
A
l
l
 
s
e
r
v
e
r
s
 
c
o
n
s
u
l
t
 
R
e
d
i
s
 
w
i
t
h
 
a
n
 
a
t
o
m
i
c
 
L
u
a
 
s
c
r
i
p
t
.
 
T
h
e
 
c
h
e
c
k
 
+
 
d
e
c
r
e
m
e
n
t
 
h
a
p
p
e
n
s
 
a
s
 
o
n
e
 
o
p
e
r
a
t
i
o
n
,
 
s
o
 
t
h
e
 
c
l
u
s
t
e
r
-
w
i
d
e
 
c
o
u
n
t
e
r
 
i
s
 
e
x
a
c
t
.
 
C
o
n
f
i
g
u
r
e
d
 
1
0
 
r
e
q
/
s
 
m
e
a
n
s
 
a
c
t
u
a
l
 
1
0
 
r
e
q
/
s
.
"
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
d
i
v
>


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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
a
t
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
c
o
l
o
r
 
}
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
v
a
l
u
e
:
 
s
t
r
i
n
g
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
 
}
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
5
5
`
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
:
 
`
$
{
c
o
l
o
r
}
1
0
`
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
 
}
}
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
 
}
}
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
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




f
u
n
c
t
i
o
n
 
b
t
n
(
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
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
{


 
 
 
 
d
i
s
p
l
a
y
:
 
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
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
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
:
 
`
$
{
c
o
l
o
r
}
1
8
`
,
 
c
o
l
o
r
,


 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
t
e
x
t
T
r
a
n
s
f
o
r
m
:
 
"
u
p
p
e
r
c
a
s
e
"
,


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
T
h
e
 
L
u
a
 
s
c
r
i
p
t
 
+
 
m
u
l
t
i
-
t
i
e
r
 
d
e
f
e
n
s
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
M
u
l
t
i
T
i
e
r
(
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
T
h
e
 
a
t
o
m
i
c
 
L
u
a
 
s
c
r
i
p
t
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
s
t
a
n
d
a
r
d
 
d
i
s
t
r
i
b
u
t
e
d
-
r
a
t
e
-
l
i
m
i
t
e
r
 
p
a
t
t
e
r
n
.
 
L
u
a
 
r
u
n
s
 
a
t
o
m
i
c
a
l
l
y
 
i
n
s
i
d
e
 
R
e
d
i
s
 
—
 
n
o


 
 
 
 
 
 
 
 
r
a
c
e
 
b
e
t
w
e
e
n
 
t
h
e
 
r
e
a
d
,
 
t
h
e
 
d
e
c
i
s
i
o
n
,
 
a
n
d
 
t
h
e
 
i
n
c
r
e
m
e
n
t
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v
 
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
:
 
"
#
0
b
1
2
2
0
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,
 
p
a
d
d
i
n
g
:
 
2
2
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
8
 
}
}
>


 
 
 
 
 
 
 
 
<
p
r
e
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
0
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
,
 
o
v
e
r
f
l
o
w
X
:
 
"
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
-
-
 
K
E
Y
S
[
1
]
 
=
 
"
r
l
:
u
s
e
r
:
4
2
"
,
 
A
R
G
V
[
1
]
 
=
 
l
i
m
i
t
,
 
A
R
G
V
[
2
]
 
=
 
w
i
n
d
o
w
_
s
e
c
o
n
d
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


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
l
o
c
a
l
<
/
s
p
a
n
>
 
c
o
u
n
t
 
=
 
t
o
n
u
m
b
e
r
(
r
e
d
i
s
.
c
a
l
l
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
G
E
T
"
<
/
s
p
a
n
>
,
 
K
E
Y
S
[
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
1
<
/
s
p
a
n
>
]
)
)
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
o
r
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
0
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
i
f
<
/
s
p
a
n
>
 
c
o
u
n
t
 
&
g
t
;
=
 
t
o
n
u
m
b
e
r
(
A
R
G
V
[
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
1
<
/
s
p
a
n
>
]
)
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
t
h
e
n
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
r
e
t
u
r
n
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
0
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
-
-
 
d
e
n
i
e
d
`
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
e
n
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
r
e
d
i
s
.
c
a
l
l
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
I
N
C
R
"
<
/
s
p
a
n
>
,
 
K
E
Y
S
[
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
1
<
/
s
p
a
n
>
]
)


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
i
f
<
/
s
p
a
n
>
 
c
o
u
n
t
 
=
=
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
0
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
t
h
e
n
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
 
 
"
}
r
e
d
i
s
.
c
a
l
l
(
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
"
E
X
P
I
R
E
"
<
/
s
p
a
n
>
,
 
K
E
Y
S
[
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
1
<
/
s
p
a
n
>
]
,
 
A
R
G
V
[
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
2
<
/
s
p
a
n
>
]
)


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
e
n
d
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
{
"
\
n
"
}
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
 
}
}
>
r
e
t
u
r
n
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
W
A
R
N
 
}
}
>
1
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>
{
`
-
-
 
a
l
l
o
w
e
d
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
p
r
e
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
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
M
u
l
t
i
-
t
i
e
r
 
d
e
f
e
n
s
e
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
R
e
a
l
 
s
y
s
t
e
m
s
 
p
u
t
 
l
i
m
i
t
e
r
s
 
a
t
 
m
u
l
t
i
p
l
e
 
l
a
y
e
r
s
 
—
 
d
e
f
e
n
s
e
 
i
n
 
d
e
p
t
h
.
 
E
a
c
h
 
c
a
t
c
h
e
s
 
d
i
f
f
e
r
e
n
t


 
 
 
 
 
 
 
 
a
t
t
a
c
k
s
,
 
w
i
t
h
 
d
i
f
f
e
r
e
n
t
 
i
d
e
n
t
i
t
y
 
a
n
d
 
d
i
f
f
e
r
e
n
t
 
c
o
s
t
.


 
 
 
 
 
 
<
/
p
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
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
{
}
,
 
v
i
s
i
b
l
e
:
 
{
 
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
:
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
7
 
}
 
}
 
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
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{
 
t
i
e
r
:
 
"
T
i
e
r
 
1
 
·
 
E
d
g
e
 
/
 
C
D
N
"
,
 
w
h
a
t
:
 
"
C
o
a
r
s
e
 
I
P
-
b
a
s
e
d
 
l
i
m
i
t
 
(
1
k
 
r
e
q
/
m
i
n
/
I
P
)
.
 
D
r
o
p
s
 
o
b
v
i
o
u
s
 
b
o
t
s
 
b
e
f
o
r
e
 
t
h
e
y
 
h
i
t
 
y
o
u
r
 
o
r
i
g
i
n
.
"
,
 
c
o
l
o
r
:
 
S
D
,
 
e
x
:
 
"
C
l
o
u
d
f
l
a
r
e
 
r
a
t
e
-
l
i
m
i
t
 
r
u
l
e
s
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
t
i
e
r
:
 
"
T
i
e
r
 
2
 
·
 
A
P
I
 
G
a
t
e
w
a
y
"
,
 
w
h
a
t
:
 
"
P
e
r
-
A
P
I
-
k
e
y
 
l
i
m
i
t
 
(
1
0
k
 
r
e
q
/
h
o
u
r
/
k
e
y
 
f
o
r
 
t
h
e
 
b
a
s
i
c
 
p
l
a
n
,
 
1
0
0
k
 
f
o
r
 
p
r
e
m
i
u
m
)
.
 
T
h
e
 
S
L
A
 
e
n
f
o
r
c
e
m
e
n
t
 
l
a
y
e
r
.
"
,
 
c
o
l
o
r
:
 
S
D
,
 
e
x
:
 
"
A
W
S
 
A
P
I
 
G
a
t
e
w
a
y
 
t
h
r
o
t
t
l
i
n
g
,
 
K
o
n
g
,
 
T
y
k
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
t
i
e
r
:
 
"
T
i
e
r
 
3
 
·
 
P
e
r
-
s
e
r
v
i
c
e
"
,
 
w
h
a
t
:
 
"
P
e
r
-
u
s
e
r
,
 
p
e
r
-
e
n
d
p
o
i
n
t
 
f
i
n
e
-
g
r
a
i
n
e
d
 
c
h
e
c
k
s
.
 
B
a
c
k
e
d
 
b
y
 
t
h
e
 
R
e
d
i
s
 
L
u
a
 
p
a
t
t
e
r
n
.
 
C
a
t
c
h
e
s
 
a
n
y
t
h
i
n
g
 
t
i
e
r
 
1
 
+
 
2
 
m
i
s
s
e
d
.
"
,
 
c
o
l
o
r
:
 
S
D
,
 
e
x
:
 
"
E
x
p
r
e
s
s
 
m
i
d
d
l
e
w
a
r
e
 
+
 
i
o
r
e
d
i
s
.
"
 
}
,


 
 
 
 
 
 
 
 
 
 
{
 
t
i
e
r
:
 
"
T
i
e
r
 
4
 
·
 
P
e
r
-
r
e
s
o
u
r
c
e
"
,
 
w
h
a
t
:
 
"
P
e
r
-
r
o
w
 
/
 
p
e
r
-
d
o
c
u
m
e
n
t
 
l
o
c
k
s
 
o
n
 
h
o
t
 
r
e
s
o
u
r
c
e
s
 
(
e
.
g
.
 
'
n
o
 
m
o
r
e
 
t
h
a
n
 
5
 
w
r
i
t
e
s
/
s
e
c
 
t
o
 
t
h
i
s
 
s
i
n
g
l
e
 
S
K
U
'
)
.
"
,
 
c
o
l
o
r
:
 
S
D
,
 
e
x
:
 
"
D
B
-
l
e
v
e
l
 
a
d
v
i
s
o
r
y
 
l
o
c
k
s
,
 
i
n
-
m
e
m
o
r
y
 
t
o
k
e
n
 
b
u
c
k
e
t
s
 
p
e
r
 
r
e
s
o
u
r
c
e
.
"
 
}
,


 
 
 
 
 
 
 
 
]
.
m
a
p
(
(
t
,
 
i
)
 
=
>
 
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
.
t
i
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
{
 
h
i
d
d
e
n
:
 
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
 
8
 
}
,
 
v
i
s
i
b
l
e
:
 
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
,
 
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
:
 
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
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
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
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
4
4
p
x
 
1
f
r
"
,
 
g
a
p
:
 
1
4
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
 
3
6
,
 
h
e
i
g
h
t
:
 
3
6
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
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
:
 
`
$
{
t
.
c
o
l
o
r
}
1
8
`
,
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
t
.
c
o
l
o
r
}
5
5
`
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
c
o
l
o
r
:
 
t
.
c
o
l
o
r
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
+
 
1
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
{
t
.
t
i
e
r
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>
{
t
.
w
h
a
t
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
 
s
t
y
l
e
=
{
{
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
,
 
c
o
l
o
r
:
 
t
.
c
o
l
o
r
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
4
 
}
}
>
E
X
 
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
t
.
e
x
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
)
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




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
8
_
R
a
t
e
L
i
m
i
t
e
r
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
f
r
a
m
e
w
o
r
k
"
,
 
l
a
b
e
l
:
 
"
F
r
a
m
e
w
o
r
k
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
F
r
a
m
e
w
o
r
k
A
p
p
l
i
e
d
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
P
e
r
-
i
n
s
t
a
n
c
e
 
v
s
 
R
e
d
i
s
"
,
 
i
c
o
n
:
 
<
Z
a
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
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
D
i
s
t
r
i
b
u
t
e
d
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
i
e
r
s
"
,
 
l
a
b
e
l
:
 
"
C
o
d
e
 
+
 
T
i
e
r
s
"
,
 
i
c
o
n
:
 
<
G
l
o
b
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
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
M
u
l
t
i
T
i
e
r
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
r
a
t
e
 
l
i
m
i
t
e
r
 
i
m
p
l
e
m
e
n
t
e
d
 
a
s
 
i
n
-
p
r
o
c
e
s
s
 
c
o
u
n
t
e
r
s
 
o
n
 
e
a
c
h
 
o
f
 
4
 
h
o
r
i
z
o
n
t
a
l
l
y
-
s
c
a
l
e
d
 
s
e
r
v
e
r
s
.
 
C
o
n
f
i
g
u
r
e
d
 
1
0
0
 
r
e
q
/
s
.
 
A
c
t
u
a
l
 
u
s
e
r
-
p
e
r
c
e
i
v
e
d
 
l
i
m
i
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
1
0
0
/
s
e
c
.
"
,


 
 
 
 
 
 
 
 
"
U
p
 
t
o
 
4
0
0
/
s
e
c
 
—
 
e
a
c
h
 
s
e
r
v
e
r
 
o
n
l
y
 
s
e
e
s
 
i
t
s
 
o
w
n
 
s
l
i
c
e
;
 
c
o
m
b
i
n
e
d
 
t
h
e
y
 
l
e
t
 
t
h
r
o
u
g
h
 
4
×
 
t
h
e
 
c
o
n
f
i
g
u
r
e
d
 
l
i
m
i
t
.
"
,


 
 
 
 
 
 
 
 
"
0
/
s
e
c
.
"
,


 
 
 
 
 
 
 
 
"
1
0
/
s
e
c
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
P
e
r
-
i
n
s
t
a
n
c
e
 
l
i
m
i
t
e
r
s
 
b
e
c
o
m
e
 
p
e
r
-
i
n
s
t
a
n
c
e
 
s
i
l
o
s
.
 
T
h
e
 
f
i
x
 
i
s
 
s
h
a
r
e
d
 
s
t
a
t
e
 
—
 
R
e
d
i
s
 
w
i
t
h
 
a
n
 
a
t
o
m
i
c
 
L
u
a
 
s
c
r
i
p
t
 
—
 
s
o
 
t
h
e
 
c
o
u
n
t
 
i
s
 
g
l
o
b
a
l
,
 
n
o
t
 
p
e
r
-
s
e
r
v
e
r
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
d
o
e
s
 
t
h
e
 
R
e
d
i
s
 
r
a
t
e
-
l
i
m
i
t
e
r
 
i
m
p
l
e
m
e
n
t
a
t
i
o
n
 
u
s
e
 
a
 
L
u
a
 
s
c
r
i
p
t
 
i
n
s
t
e
a
d
 
o
f
 
t
w
o
 
s
e
p
a
r
a
t
e
 
c
a
l
l
s
 
(
G
E
T
 
t
h
e
n
 
I
N
C
R
)
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
L
u
a
 
i
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
L
u
a
 
r
u
n
s
 
a
t
o
m
i
c
a
l
l
y
 
i
n
s
i
d
e
 
R
e
d
i
s
.
 
W
i
t
h
o
u
t
 
i
t
,
 
t
w
o
 
c
l
i
e
n
t
s
 
c
o
u
l
d
 
b
o
t
h
 
G
E
T
 
t
h
e
 
c
o
u
n
t
,
 
b
o
t
h
 
s
e
e
 
<
 
l
i
m
i
t
,
 
a
n
d
 
b
o
t
h
 
I
N
C
R
 
—
 
l
e
t
t
i
n
g
 
t
h
r
o
u
g
h
 
2
×
 
t
h
e
 
l
i
m
i
t
.
"
,


 
 
 
 
 
 
 
 
"
R
e
q
u
i
r
e
d
 
b
y
 
R
e
d
i
s
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
e
n
c
r
y
p
t
e
d
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
T
w
o
-
s
t
e
p
 
(
G
E
T
 
t
h
e
n
 
I
N
C
R
)
 
i
s
 
r
a
c
y
 
—
 
c
o
n
c
u
r
r
e
n
t
 
c
a
l
l
s
 
c
a
n
 
b
o
t
h
 
r
e
a
d
 
'
b
e
l
o
w
 
l
i
m
i
t
'
 
t
h
e
n
 
b
o
t
h
 
i
n
c
r
e
m
e
n
t
 
p
a
s
t
 
i
t
.
 
L
u
a
 
b
u
n
d
l
e
s
 
b
o
t
h
 
i
n
t
o
 
o
n
e
 
a
t
o
m
i
c
 
o
p
e
r
a
t
i
o
n
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
i
s
 
m
u
l
t
i
-
t
i
e
r
 
r
a
t
e
 
l
i
m
i
t
i
n
g
 
(
e
d
g
e
 
+
 
g
a
t
e
w
a
y
 
+
 
s
e
r
v
i
c
e
)
 
b
e
t
t
e
r
 
t
h
a
n
 
a
 
s
i
n
g
l
e
 
t
i
g
h
t
 
l
i
m
i
t
e
r
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
D
e
c
o
r
a
t
i
o
n
.
"
,


 
 
 
 
 
 
 
 
"
E
a
c
h
 
t
i
e
r
 
f
i
l
t
e
r
s
 
o
u
t
 
a
 
c
l
a
s
s
 
o
f
 
a
b
u
s
e
 
c
h
e
a
p
l
y
.
 
E
d
g
e
 
d
r
o
p
s
 
b
o
t
s
 
b
e
f
o
r
e
 
t
h
e
y
 
c
o
s
t
 
y
o
u
r
 
o
r
i
g
i
n
.
 
G
a
t
e
w
a
y
 
e
n
f
o
r
c
e
s
 
S
L
A
.
 
S
e
r
v
i
c
e
 
c
a
t
c
h
e
s
 
w
h
a
t
 
g
o
t
 
t
h
r
o
u
g
h
.
 
D
e
f
e
n
s
e
 
i
n
 
d
e
p
t
h
.
"
,


 
 
 
 
 
 
 
 
"
I
t
'
s
 
f
a
s
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
C
h
e
a
p
e
r
 
l
i
c
e
n
s
i
n
g
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
E
d
g
e
 
h
a
n
d
l
e
s
 
h
u
g
e
-
v
o
l
u
m
e
 
c
h
e
a
p
 
d
r
o
p
s
.
 
G
a
t
e
w
a
y
 
h
a
n
d
l
e
s
 
p
e
r
-
k
e
y
 
S
L
A
.
 
S
e
r
v
i
c
e
 
c
a
t
c
h
e
s
 
s
u
b
t
l
e
 
a
b
u
s
e
.
 
A
 
s
i
n
g
l
e
 
l
a
y
e
r
 
w
o
u
l
d
 
e
i
t
h
e
r
 
b
e
 
t
o
o
 
c
o
a
r
s
e
 
(
l
o
t
s
 
g
e
t
s
 
t
h
r
o
u
g
h
)
 
o
r
 
t
o
o
 
e
x
p
e
n
s
i
v
e
 
(
e
v
e
r
y
 
t
i
n
y
 
r
e
q
u
e
s
t
 
p
a
y
s
 
t
h
e
 
m
o
s
t
-
e
x
p
e
n
s
i
v
e
 
c
h
e
c
k
)
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
R
e
d
i
s
 
g
o
e
s
 
d
o
w
n
.
 
T
h
e
 
r
a
t
e
-
l
i
m
i
t
e
r
'
s
 
t
i
e
r
-
3
 
s
e
r
v
i
c
e
-
l
e
v
e
l
 
c
h
e
c
k
 
n
o
w
 
f
a
i
l
s
.
 
B
e
s
t
 
f
a
l
l
b
a
c
k
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
R
e
j
e
c
t
 
a
l
l
 
r
e
q
u
e
s
t
s
.
"
,


 
 
 
 
 
 
 
 
"
A
l
l
o
w
 
a
l
l
 
r
e
q
u
e
s
t
s
 
(
f
a
i
l
-
o
p
e
n
)
 
f
o
r
 
t
h
a
t
 
t
i
e
r
 
—
 
y
o
u
r
 
e
d
g
e
 
/
 
g
a
t
e
w
a
y
 
t
i
e
r
s
 
s
t
i
l
l
 
e
n
f
o
r
c
e
 
c
o
a
r
s
e
r
 
l
i
m
i
t
s
,
 
s
o
 
t
r
a
f
f
i
c
 
i
s
n
'
t
 
c
o
m
p
l
e
t
e
l
y
 
u
n
p
r
o
t
e
c
t
e
d
.
"
,


 
 
 
 
 
 
 
 
"
C
r
a
s
h
 
t
h
e
 
s
e
r
v
i
c
e
.
"
,


 
 
 
 
 
 
 
 
"
R
e
t
r
y
 
f
o
r
e
v
e
r
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
F
a
i
l
-
o
p
e
n
 
i
s
 
u
s
u
a
l
l
y
 
t
h
e
 
r
i
g
h
t
 
c
h
o
i
c
e
 
—
 
l
o
c
k
i
n
g
 
o
u
t
 
a
l
l
 
t
r
a
f
f
i
c
 
o
n
 
a
 
R
e
d
i
s
 
b
l
i
p
 
w
o
u
l
d
 
c
a
u
s
e
 
a
 
s
e
l
f
-
i
n
f
l
i
c
t
e
d
 
o
u
t
a
g
e
.
 
T
h
e
 
o
t
h
e
r
 
t
i
e
r
s
 
(
w
h
i
c
h
 
h
a
v
e
 
t
h
e
i
r
 
o
w
n
 
s
t
a
t
e
)
 
k
e
e
p
 
s
o
m
e
 
p
r
o
t
e
c
t
i
o
n
 
i
n
 
p
l
a
c
e
.
"
,


 
 
 
 
}
,


 
 
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
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
D
e
s
i
g
n
 
a
 
D
i
s
t
r
i
b
u
t
e
d
 
R
a
t
e
 
L
i
m
i
t
e
r
"


 
 
 
 
 
 
l
e
v
e
l
=
{
8
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
6
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
T
h
e
 
'
d
e
s
i
g
n
 
a
 
r
a
t
e
 
l
i
m
i
t
e
r
 
a
t
 
s
c
a
l
e
'
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
,
 
p
r
o
d
u
c
t
i
o
n
i
z
e
d
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


