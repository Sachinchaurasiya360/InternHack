
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
 
V
i
d
e
o
 
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
 
u
p
l
o
a
d
 
v
i
d
e
o
,
 
t
r
a
n
s
c
o
d
e
 
t
o
 
m
u
l
t
i
p
l
e
 
b
i
t
r
a
t
e
s
,
 
s
t
r
e
a
m
 
p
l
a
y
b
a
c
k
 
w
o
r
l
d
w
i
d
e
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
 
p
l
a
y
b
a
c
k
 
s
t
a
r
t
 
t
i
m
e
 
<
 
2
s
 
p
9
5
,
 
s
m
o
o
t
h
 
a
t
 
a
n
y
 
b
a
n
d
w
i
d
t
h
,
 
d
u
r
a
b
l
e
 
s
t
o
r
a
g
e
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
:
 
s
e
a
r
c
h
,
 
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
,
 
c
o
m
m
e
n
t
s
,
 
m
o
n
e
t
i
z
a
t
i
o
n
 
(
e
a
c
h
 
i
s
 
i
t
s
 
o
w
n
 
d
e
s
i
g
n
)
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
5
0
0
 
h
o
u
r
s
 
u
p
l
o
a
d
e
d
 
/
 
m
i
n
u
t
e
 
→
 
~
7
0
 
G
B
 
r
a
w
 
/
 
m
i
n
u
t
e
 
→
 
~
1
0
0
 
P
B
 
/
 
y
e
a
r
 
b
e
f
o
r
e
 
t
r
a
n
s
c
o
d
e
.
"
,


 
 
 
 
 
 
"
T
r
a
n
s
c
o
d
e
d
 
t
o
 
6
 
q
u
a
l
i
t
y
 
t
i
e
r
s
 
(
2
4
0
p
,
 
3
6
0
p
,
 
4
8
0
p
,
 
7
2
0
p
,
 
1
0
8
0
p
,
 
4
K
)
 
≈
 
2
.
5
x
 
s
t
o
r
a
g
e
 
=
 
2
5
0
 
P
B
 
/
 
y
e
a
r
.
"
,


 
 
 
 
 
 
"
1
B
 
d
a
i
l
y
 
w
a
t
c
h
 
h
o
u
r
s
 
×
 
5
 
M
b
p
s
 
a
v
g
 
≈
 
5
 
T
b
p
s
 
e
g
r
e
s
s
 
s
u
s
t
a
i
n
e
d
,
 
p
e
a
k
s
 
2
0
 
T
b
p
s
.
"
,


 
 
 
 
 
 
"
C
D
N
-
s
e
r
v
e
d
:
 
~
9
9
%
 
o
f
 
b
y
t
e
s
 
a
r
e
 
s
e
r
v
e
d
 
f
r
o
m
 
e
d
g
e
 
n
o
d
e
s
,
 
n
o
t
 
o
r
i
g
i
n
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
O
S
T
 
/
u
p
l
o
a
d
 
(
m
u
l
t
i
p
a
r
t
,
 
c
h
u
n
k
e
d
)
 
→
 
u
p
l
o
a
d
_
i
d
"
,


 
 
 
 
 
 
"
v
i
d
e
o
s
(
i
d
,
 
o
w
n
e
r
,
 
t
i
t
l
e
,
 
d
u
r
a
t
i
o
n
,
 
s
t
a
t
u
s
,
 
m
a
n
i
f
e
s
t
_
u
r
l
,
 
…
)
 
—
 
P
o
s
t
g
r
e
s
"
,


 
 
 
 
 
 
"
p
l
a
y
b
a
c
k
 
m
a
n
i
f
e
s
t
 
(
H
L
S
 
/
 
D
A
S
H
 
.
m
3
u
8
)
 
→
 
l
i
s
t
 
o
f
 
b
i
t
r
a
t
e
 
v
a
r
i
a
n
t
s
 
a
n
d
 
c
h
u
n
k
 
U
R
L
s
 
o
n
 
t
h
e
 
C
D
N
"
,


 
 
 
 
 
 
"
p
e
r
-
c
h
u
n
k
 
o
b
j
e
c
t
s
 
o
n
 
S
3
-
c
l
a
s
s
 
s
t
o
r
a
g
e
;
 
C
D
N
 
c
a
c
h
e
s
 
t
h
e
 
h
o
t
 
o
n
e
s
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
U
p
l
o
a
d
:
 
c
l
i
e
n
t
 
→
 
A
P
I
 
→
 
o
b
j
e
c
t
 
s
t
o
r
a
g
e
 
→
 
t
r
a
n
s
c
o
d
e
 
q
u
e
u
e
 
→
 
w
o
r
k
e
r
 
f
l
e
e
t
 
→
 
o
b
j
e
c
t
 
s
t
o
r
a
g
e
 
(
p
e
r
-
b
i
t
r
a
t
e
)
 
→
 
p
u
b
l
i
s
h
 
m
a
n
i
f
e
s
t
.
"
,


 
 
 
 
 
 
"
P
l
a
y
b
a
c
k
:
 
c
l
i
e
n
t
 
→
 
C
D
N
 
e
d
g
e
 
→
 
i
f
 
m
i
s
s
,
 
o
r
i
g
i
n
 
→
 
o
b
j
e
c
t
 
s
t
o
r
a
g
e
.
 
A
d
a
p
t
i
v
e
 
b
i
t
r
a
t
e
 
s
w
i
t
c
h
e
s
 
m
i
d
-
s
t
r
e
a
m
 
a
s
 
b
a
n
d
w
i
d
t
h
 
c
h
a
n
g
e
s
.
"
,


 
 
 
 
 
 
"
M
e
t
a
d
a
t
a
 
s
e
r
v
i
c
e
 
s
e
r
v
e
s
 
v
i
d
e
o
 
o
b
j
e
c
t
s
,
 
v
i
e
w
 
c
o
u
n
t
s
,
 
e
t
c
.
,
 
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
 
o
f
 
t
h
e
 
b
y
t
e
 
p
a
t
h
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
 
Y
o
u
T
u
b
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


 
 
 
 
 
 
 
 
T
w
o
 
d
i
s
t
i
n
c
t
 
p
a
t
h
s
:
 
t
h
e
 
u
p
l
o
a
d
 
+
 
t
r
a
n
s
c
o
d
e
 
p
i
p
e
l
i
n
e
 
(
w
r
i
t
e
-
h
e
a
v
y
,
 
b
a
t
c
h
-
f
r
i
e
n
d
l
y
)
 
a
n
d
 
t
h
e


 
 
 
 
 
 
 
 
p
l
a
y
b
a
c
k
 
p
a
t
h
 
(
r
e
a
d
-
h
e
a
v
y
,
 
l
a
t
e
n
c
y
-
c
r
i
t
i
c
a
l
,
 
a
l
m
o
s
t
 
a
l
l
 
f
r
o
m
 
C
D
N
)
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
 
A
d
a
p
t
i
v
e
 
b
i
t
r
a
t
e
 
p
l
a
y
b
a
c
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




i
n
t
e
r
f
a
c
e
 
Q
u
a
l
i
t
y
T
i
e
r
 
{
 
n
a
m
e
:
 
s
t
r
i
n
g
;
 
b
i
t
r
a
t
e
:
 
n
u
m
b
e
r
;
 
n
e
e
d
s
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
 
}




c
o
n
s
t
 
T
I
E
R
S
:
 
Q
u
a
l
i
t
y
T
i
e
r
[
]
 
=
 
[


 
 
{
 
n
a
m
e
:
 
"
2
4
0
p
"
,
 
b
i
t
r
a
t
e
:
 
0
.
4
,
 
n
e
e
d
s
:
 
0
.
6
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
,


 
 
{
 
n
a
m
e
:
 
"
3
6
0
p
"
,
 
b
i
t
r
a
t
e
:
 
0
.
8
,
 
n
e
e
d
s
:
 
1
.
2
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
,


 
 
{
 
n
a
m
e
:
 
"
4
8
0
p
"
,
 
b
i
t
r
a
t
e
:
 
1
.
5
,
 
n
e
e
d
s
:
 
2
.
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
,


 
 
{
 
n
a
m
e
:
 
"
7
2
0
p
"
,
 
b
i
t
r
a
t
e
:
 
3
.
0
,
 
n
e
e
d
s
:
 
4
.
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
,


 
 
{
 
n
a
m
e
:
 
"
1
0
8
0
p
"
,
 
b
i
t
r
a
t
e
:
 
5
.
0
,
 
n
e
e
d
s
:
 
6
.
5
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
 
}
,


 
 
{
 
n
a
m
e
:
 
"
4
K
"
,
 
b
i
t
r
a
t
e
:
 
1
6
.
0
,
 
n
e
e
d
s
:
 
2
0
.
0
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
 
}
,


]
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
 
P
l
a
y
e
r
E
v
e
n
t
 
{
 
t
:
 
n
u
m
b
e
r
;
 
q
u
a
l
i
t
y
:
 
s
t
r
i
n
g
;
 
r
e
a
s
o
n
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
 
A
B
R
P
l
a
y
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
b
a
n
d
w
i
d
t
h
,
 
s
e
t
B
a
n
d
w
i
d
t
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
8
)
;
 
/
/
 
M
b
p
s


 
 
c
o
n
s
t
 
[
p
l
a
y
i
n
g
,
 
s
e
t
P
l
a
y
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
,
 
s
e
t
C
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
2
)
;
 
/
/
 
s
t
a
r
t
 
a
t
 
4
8
0
p


 
 
c
o
n
s
t
 
[
e
v
e
n
t
s
,
 
s
e
t
E
v
e
n
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
<
P
l
a
y
e
r
E
v
e
n
t
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
[
t
,
 
s
e
t
T
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
p
l
a
y
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


 
 
 
 
 
 
s
e
t
T
(
(
c
u
r
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
e
x
t
 
=
 
c
u
r
 
+
 
1
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
n
e
x
t
 
>
 
6
0
 
?
 
0
 
:
 
n
e
x
t
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
2
5
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
p
l
a
y
i
n
g
]
)
;




 
 
/
/
 
A
B
R
 
a
l
g
o
r
i
t
h
m
:
 
p
i
c
k
 
t
h
e
 
h
i
g
h
e
s
t
 
t
i
e
r
 
t
h
a
t
 
f
i
t
s
 
c
o
m
f
o
r
t
a
b
l
y
 
b
e
l
o
w
 
c
u
r
r
e
n
t
 
b
a
n
d
w
i
d
t
h


 
 
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


 
 
 
 
c
o
n
s
t
 
i
d
e
a
l
 
=
 
T
I
E
R
S
.
m
a
p
(
(
t
i
e
r
,
 
i
)
 
=
>
 
(
{
 
i
,
 
t
i
e
r
 
}
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
{
 
t
i
e
r
 
}
)
 
=
>
 
t
i
e
r
.
n
e
e
d
s
 
<
=
 
b
a
n
d
w
i
d
t
h
)
.
s
l
i
c
e
(
-
1
)
[
0
]
;


 
 
 
 
i
f
 
(
!
i
d
e
a
l
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
i
d
e
a
l
.
i
 
!
=
=
 
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
 
{


 
 
 
 
 
 
c
o
n
s
t
 
u
p
 
=
 
i
d
e
a
l
.
i
 
>
 
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
;


 
 
 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
 
 
s
e
t
E
v
e
n
t
s
(
(
e
s
)
 
=
>
 
[
.
.
.
e
s
,
 
{


 
 
 
 
 
 
 
 
t
,


 
 
 
 
 
 
 
 
q
u
a
l
i
t
y
:
 
i
d
e
a
l
.
t
i
e
r
.
n
a
m
e
,


 
 
 
 
 
 
 
 
r
e
a
s
o
n
:
 
u
p
 
?
 
`
b
a
n
d
w
i
d
t
h
 
$
{
b
a
n
d
w
i
d
t
h
.
t
o
F
i
x
e
d
(
1
)
}
 
M
b
p
s
 
—
 
u
p
s
h
i
f
t
i
n
g
`
 
:
 
`
b
a
n
d
w
i
d
t
h
 
$
{
b
a
n
d
w
i
d
t
h
.
t
o
F
i
x
e
d
(
1
)
}
 
M
b
p
s
 
—
 
d
o
w
n
s
h
i
f
t
i
n
g
`
,


 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
u
p
 
?
 
S
D
 
:
 
W
A
R
N
,


 
 
 
 
 
 
}
]
.
s
l
i
c
e
(
-
5
)
)
;


 
 
 
 
 
 
 


 
 
 
 
 
 
s
e
t
C
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
(
i
d
e
a
l
.
i
)
;


 
 
 
 
}


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
e
x
h
a
u
s
t
i
v
e
-
d
e
p
s


 
 
}
,
 
[
b
a
n
d
w
i
d
t
h
,
 
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
E
v
e
n
t
s
(
[
]
)
;
 
s
e
t
C
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
(
2
)
;
 
s
e
t
T
(
0
)
;
 
s
e
t
P
l
a
y
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
 
c
u
r
r
e
n
t
T
 
=
 
T
I
E
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
D
r
a
g
 
b
a
n
d
w
i
d
t
h
.
 
W
a
t
c
h
 
t
h
e
 
p
l
a
y
e
r
 
d
o
w
n
s
h
i
f
t
 
/
 
u
p
s
h
i
f
t
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


 
 
 
 
 
 
 
 
A
d
a
p
t
i
v
e
 
B
i
t
r
a
t
e
 
S
t
r
e
a
m
i
n
g
 
(
A
B
R
)
 
s
p
l
i
t
s
 
t
h
e
 
v
i
d
e
o
 
i
n
t
o
 
~
4
-
s
e
c
o
n
d
 
c
h
u
n
k
s
.
 
B
e
f
o
r
e
 
e
a
c
h


 
 
 
 
 
 
 
 
c
h
u
n
k
,
 
t
h
e
 
p
l
a
y
e
r
 
m
e
a
s
u
r
e
s
 
b
a
n
d
w
i
d
t
h
 
a
n
d
 
p
i
c
k
s
 
t
h
e
 
h
i
g
h
e
s
t
 
q
u
a
l
i
t
y
 
t
h
a
t
 
f
i
t
s
.
 
D
r
o
p


 
 
 
 
 
 
 
 
b
a
n
d
w
i
d
t
h
 
m
i
d
-
p
l
a
y
b
a
c
k
 
a
n
d
 
t
h
e
 
n
e
x
t
 
c
h
u
n
k
 
a
r
r
i
v
e
s
 
a
t
 
l
o
w
e
r
 
q
u
a
l
i
t
y
 
—
 
i
n
v
i
s
i
b
l
y
 
t
o


 
 
 
 
 
 
 
 
t
h
e
 
u
s
e
r
,
 
n
o
 
b
u
f
f
e
r
i
n
g
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
m
b
-
5
"
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
s
p
a
c
e
-
b
e
t
w
e
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
 
8
 
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
y
o
u
r
 
b
a
n
d
w
i
d
t
h
 
(
M
b
p
s
)
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
 
b
a
n
d
w
i
d
t
h
 
<
 
2
 
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
>
=
 
{
b
a
n
d
w
i
d
t
h
.
t
o
F
i
x
e
d
(
1
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
r
a
n
g
e
"


 
 
 
 
 
 
 
 
 
 
m
i
n
=
{
0
.
3
}


 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
2
5
}


 
 
 
 
 
 
 
 
 
 
s
t
e
p
=
{
0
.
1
}


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
b
a
n
d
w
i
d
t
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
B
a
n
d
w
i
d
t
h
(
N
u
m
b
e
r
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
)
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
 
"
1
0
0
%
"
,
 
a
c
c
e
n
t
C
o
l
o
r
:
 
b
a
n
d
w
i
d
t
h
 
<
 
2
 
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
 
1
8
 
}
}
>


 
 
 
 
 
 
 
 
{
/
*
 
v
i
d
e
o
 
p
l
a
y
e
r
 
s
i
m
u
l
a
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
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
o
s
i
t
i
o
n
:
 
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
,
 
a
s
p
e
c
t
R
a
t
i
o
:
 
"
1
6
 
/
 
9
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
 
"
#
0
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
R
a
d
i
u
s
:
 
8
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
"
v
i
d
e
o
"
 
g
r
a
d
i
e
n
t
 
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
1
3
5
d
e
g
,
 
$
{
c
u
r
r
e
n
t
T
.
c
o
l
o
r
}
3
3
,
 
#
0
b
1
2
2
0
 
7
0
%
)
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
4
 
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
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
i
n
s
e
t
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
q
u
a
l
i
t
y
 
b
a
d
g
e
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
c
u
r
r
e
n
t
T
.
n
a
m
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
 
s
c
a
l
e
:
 
0
.
8
 
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
 
s
c
a
l
e
:
 
1
 
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
 
s
c
a
l
e
:
 
0
.
8
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
3
2
0
,
 
d
a
m
p
i
n
g
:
 
2
2
 
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
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
t
o
p
:
 
1
2
,
 
r
i
g
h
t
:
 
1
2
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
4
p
x
 
1
0
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
u
r
r
e
n
t
T
.
c
o
l
o
r
}
3
3
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
c
u
r
r
e
n
t
T
.
c
o
l
o
r
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
c
u
r
r
e
n
t
T
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
.
n
a
m
e
}
 
·
 
{
c
u
r
r
e
n
t
T
.
b
i
t
r
a
t
e
}
 
M
b
p
s


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
{
/
*
 
p
r
o
g
r
e
s
s
 
b
a
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
o
s
i
t
i
o
n
:
 
"
a
b
s
o
l
u
t
e
"
,
 
b
o
t
t
o
m
:
 
1
2
,
 
l
e
f
t
:
 
1
2
,
 
r
i
g
h
t
:
 
1
2
 
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
 
h
e
i
g
h
t
:
 
4
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
2
5
5
,
2
5
5
,
2
5
5
,
0
.
2
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
 
2
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
(
t
 
/
 
6
0
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
s
p
a
c
e
-
b
e
t
w
e
e
n
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
6
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
r
g
b
a
(
2
5
5
,
2
5
5
,
2
5
5
,
0
.
6
)
"
,
 
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
 
4
 
}
}
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
f
l
o
o
r
(
t
 
/
 
6
0
)
.
t
o
S
t
r
i
n
g
(
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
:
{
(
t
 
%
 
6
0
)
.
t
o
S
t
r
i
n
g
(
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
s
p
a
n
>
0
1
:
0
0
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
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
t
i
e
r
 
l
a
d
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
6
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
T
I
E
R
S
.
m
a
p
(
(
t
i
e
r
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
 
i
s
A
c
t
i
v
e
 
=
 
i
 
=
=
=
 
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
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
v
a
i
l
a
b
l
e
 
=
 
t
i
e
r
.
n
e
e
d
s
 
<
=
 
b
a
n
d
w
i
d
t
h
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
i
e
r
.
n
a
m
e
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
i
s
A
c
t
i
v
e
 
?
 
t
i
e
r
.
c
o
l
o
r
 
:
 
`
$
{
t
i
e
r
.
c
o
l
o
r
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
C
o
l
o
r
:
 
i
s
A
c
t
i
v
e
 
?
 
`
$
{
t
i
e
r
.
c
o
l
o
r
}
2
2
`
 
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
0
6
)
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
 
i
s
A
v
a
i
l
a
b
l
e
 
?
 
1
 
:
 
0
.
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
8
p
x
 
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
R
a
d
i
u
s
:
 
6
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
.
5
p
x
 
s
o
l
i
d
"
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
 
i
s
A
c
t
i
v
e
 
?
 
t
i
e
r
.
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
t
i
e
r
.
n
a
m
e
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
 
N
E
U
T
R
A
L
,
 
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
 
2
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
≥
 
{
t
i
e
r
.
n
e
e
d
s
}
 
M
b
p
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
P
l
a
y
i
n
g
(
(
p
)
 
=
>
 
!
p
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
p
l
a
y
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
p
l
a
y
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
p
l
a
y
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




 
 
 
 
 
 
 
 
{
/
*
 
e
v
e
n
t
 
l
o
g
 
*
/
}


 
 
 
 
 
 
 
 
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
2
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
0
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
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
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
 
6
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
 
N
E
U
T
R
A
L
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


 
 
 
 
 
 
 
 
 
 
 
 
A
B
R
 
E
V
E
N
T
S


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
e
v
e
n
t
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
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
r
a
g
 
t
h
e
 
b
a
n
d
w
i
d
t
h
 
s
l
i
d
e
r
 
t
o
 
t
r
i
g
g
e
r
 
q
u
a
l
i
t
y
 
c
h
a
n
g
e
s


 
 
 
 
 
 
 
 
 
 
 
 
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
 
4
 
}
}
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
v
e
n
t
s
.
m
a
p
(
(
e
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
i
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
 
x
:
 
-
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
 
x
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
 
c
o
l
o
r
:
 
e
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
 
}
}
>
→
 
{
e
.
q
u
a
l
i
t
y
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
,
 
m
a
r
g
i
n
L
e
f
t
:
 
8
 
}
}
>
{
e
.
r
e
a
s
o
n
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
 
U
p
l
o
a
d
 
p
i
p
e
l
i
n
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




c
o
n
s
t
 
P
I
P
E
L
I
N
E
 
=
 
[


 
 
{
 
k
:
 
"
U
p
l
o
a
d
 
(
c
h
u
n
k
e
d
)
"
,
 
v
:
 
"
C
l
i
e
n
t
 
s
p
l
i
t
s
 
t
h
e
 
f
i
l
e
 
i
n
t
o
 
5
-
1
0
 
M
B
 
p
a
r
t
s
 
a
n
d
 
u
p
l
o
a
d
s
 
i
n
 
p
a
r
a
l
l
e
l
.
 
R
e
s
u
m
a
b
l
e
 
o
n
 
f
l
a
k
y
 
c
o
n
n
e
c
t
i
o
n
s
 
(
S
3
 
m
u
l
t
i
p
a
r
t
,
 
G
C
S
 
r
e
s
u
m
a
b
l
e
)
.
"
 
}
,


 
 
{
 
k
:
 
"
V
a
l
i
d
a
t
e
 
+
 
a
c
c
e
p
t
"
,
 
v
:
 
"
O
r
i
g
i
n
 
s
t
o
r
a
g
e
 
h
o
l
d
s
 
t
h
e
 
r
a
w
 
f
i
l
e
.
 
D
a
t
a
b
a
s
e
 
r
o
w
 
c
r
e
a
t
e
d
 
w
i
t
h
 
s
t
a
t
u
s
=
p
r
o
c
e
s
s
i
n
g
.
 
U
s
e
r
 
s
e
e
s
 
t
h
e
i
r
 
v
i
d
e
o
 
i
n
 
t
h
e
i
r
 
l
i
b
r
a
r
y
 
i
m
m
e
d
i
a
t
e
l
y
.
"
 
}
,


 
 
{
 
k
:
 
"
Q
u
e
u
e
 
t
r
a
n
s
c
o
d
e
 
j
o
b
s
"
,
 
v
:
 
"
W
o
r
k
e
r
 
f
l
e
e
t
 
p
u
l
l
s
 
f
r
o
m
 
a
 
q
u
e
u
e
.
 
E
a
c
h
 
j
o
b
 
t
r
a
n
s
c
o
d
e
s
 
t
o
 
o
n
e
 
b
i
t
r
a
t
e
 
u
s
i
n
g
 
f
f
m
p
e
g
 
/
 
G
P
U
 
p
i
p
e
l
i
n
e
s
.
 
P
a
r
a
l
l
e
l
i
s
m
 
≈
 
N
 
b
i
t
r
a
t
e
s
 
×
 
M
 
s
h
a
r
d
s
.
"
 
}
,


 
 
{
 
k
:
 
"
G
e
n
e
r
a
t
e
 
m
a
n
i
f
e
s
t
"
,
 
v
:
 
"
O
n
c
e
 
a
l
l
 
q
u
a
l
i
t
i
e
s
 
a
r
e
 
w
r
i
t
t
e
n
 
t
o
 
s
t
o
r
a
g
e
,
 
b
u
i
l
d
 
t
h
e
 
.
m
3
u
8
 
/
 
.
m
p
d
 
p
l
a
y
l
i
s
t
 
l
i
n
k
i
n
g
 
t
o
 
e
a
c
h
 
c
h
u
n
k
 
p
e
r
 
q
u
a
l
i
t
y
.
"
 
}
,


 
 
{
 
k
:
 
"
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
 
t
o
 
C
D
N
 
e
d
g
e
s
"
,
 
v
:
 
"
P
u
s
h
 
t
o
 
a
 
f
e
w
 
p
o
p
u
l
a
r
 
e
d
g
e
 
r
e
g
i
o
n
s
 
i
m
m
e
d
i
a
t
e
l
y
.
 
P
u
l
l
-
o
n
-
d
e
m
a
n
d
 
f
o
r
 
l
e
s
s
-
p
o
p
u
l
a
r
 
r
e
g
i
o
n
s
;
 
C
D
N
 
p
o
p
u
l
a
t
e
s
 
o
n
 
f
i
r
s
t
 
c
a
c
h
e
 
m
i
s
s
.
"
 
}
,


 
 
{
 
k
:
 
"
P
l
a
y
b
a
c
k
 
r
e
a
d
y
"
,
 
v
:
 
"
S
e
t
 
s
t
a
t
u
s
=
p
u
b
l
i
s
h
e
d
.
 
T
h
e
 
v
i
d
e
o
 
a
p
p
e
a
r
s
 
a
s
 
a
v
a
i
l
a
b
l
e
;
 
c
l
i
e
n
t
s
 
c
a
n
 
s
t
r
e
a
m
 
f
r
o
m
 
a
n
y
 
e
d
g
e
.
"
 
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
 
P
i
p
e
l
i
n
e
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
F
r
o
m
 
u
p
l
o
a
d
 
t
o
 
p
l
a
y
a
b
l
e
 
i
n
 
6
 
s
t
a
g
e
s
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
 
u
p
l
o
a
d
-
t
o
-
p
u
b
l
i
s
h
 
p
a
t
h
 
i
s
 
m
o
s
t
l
y
 
b
a
t
c
h
 
a
n
d
 
a
s
y
n
c
h
r
o
n
o
u
s
.
 
T
h
e
 
u
s
e
r
-
f
a
c
i
n
g
 
l
a
t
e
n
c
y
 
i
s


 
 
 
 
 
 
 
 
j
u
s
t
 
t
h
e
 
u
p
l
o
a
d
 
i
t
s
e
l
f
;
 
e
v
e
r
y
t
h
i
n
g
 
e
l
s
e
 
h
a
p
p
e
n
s
 
i
n
 
t
h
e
 
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
6
 
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
P
I
P
E
L
I
N
E
.
m
a
p
(
(
p
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
p
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
S
D
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
S
D
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
 
S
D
 
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
p
.
k
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
 
}
}
>
{
p
.
v
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
Y
o
u
T
u
b
e
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
a
b
r
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
d
a
p
t
i
v
e
 
B
i
t
r
a
t
e
"
,
 
i
c
o
n
:
 
<
V
i
d
e
o
 
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
A
B
R
P
l
a
y
e
r
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
p
i
p
e
l
i
n
e
"
,
 
l
a
b
e
l
:
 
"
U
p
l
o
a
d
 
P
i
p
e
l
i
n
e
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
P
i
p
e
l
i
n
e
 
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
W
h
y
 
s
p
l
i
t
 
a
 
v
i
d
e
o
 
i
n
t
o
 
m
a
n
y
 
s
h
o
r
t
 
c
h
u
n
k
s
 
(
H
L
S
/
D
A
S
H
)
 
i
n
s
t
e
a
d
 
o
f
 
s
t
r
e
a
m
i
n
g
 
t
h
e
 
w
h
o
l
e
 
f
i
l
e
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
S
m
a
l
l
e
r
 
f
i
l
e
s
 
c
o
m
p
r
e
s
s
 
b
e
t
t
e
r
.
"
,


 
 
 
 
 
 
 
 
"
L
e
t
s
 
t
h
e
 
p
l
a
y
e
r
 
s
w
i
t
c
h
 
q
u
a
l
i
t
y
 
m
i
d
-
p
l
a
y
b
a
c
k
 
b
y
 
r
e
q
u
e
s
t
i
n
g
 
t
h
e
 
n
e
x
t
 
c
h
u
n
k
 
a
t
 
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
 
b
i
t
r
a
t
e
.
 
A
l
s
o
 
C
D
N
-
f
r
i
e
n
d
l
y
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
 
H
T
T
P
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
C
h
u
n
k
s
 
d
e
c
o
u
p
l
e
 
t
h
e
 
f
i
l
e
 
f
r
o
m
 
t
h
e
 
s
t
r
e
a
m
i
n
g
 
p
i
p
e
.
 
E
a
c
h
 
c
h
u
n
k
 
i
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
 
f
e
t
c
h
e
d
 
a
t
 
w
h
a
t
e
v
e
r
 
q
u
a
l
i
t
y
 
f
i
t
s
 
c
u
r
r
e
n
t
 
b
a
n
d
w
i
d
t
h
.
 
C
D
N
 
c
a
c
h
e
s
 
t
h
e
m
 
w
e
l
l
 
b
e
c
a
u
s
e
 
t
h
e
y
'
r
e
 
i
n
d
i
v
i
d
u
a
l
 
i
m
m
u
t
a
b
l
e
 
U
R
L
s
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
 
Y
o
u
T
u
b
e
 
p
r
e
c
o
m
p
u
t
e
 
6
+
 
b
i
t
r
a
t
e
 
v
a
r
i
a
n
t
s
 
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
r
a
n
s
c
o
d
i
n
g
 
o
n
 
d
e
m
a
n
d
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
T
r
a
n
s
c
o
d
i
n
g
 
i
s
 
C
P
U
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
 
a
n
d
 
s
l
o
w
.
 
D
o
i
n
g
 
i
t
 
o
n
c
e
 
a
t
 
u
p
l
o
a
d
 
m
a
k
e
s
 
p
l
a
y
b
a
c
k
 
a
 
d
u
m
b
 
b
y
t
e
-
f
e
t
c
h
 
f
r
o
m
 
t
h
e
 
C
D
N
 
—
 
m
i
l
l
i
o
n
s
 
o
f
 
v
i
e
w
e
r
s
,
 
z
e
r
o
 
r
e
-
e
n
c
o
d
i
n
g
 
c
o
s
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
 
H
L
S
.
"
,


 
 
 
 
 
 
 
 
"
S
a
v
e
s
 
d
i
s
k
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
r
e
-
t
r
a
n
s
c
o
d
i
n
g
 
i
s
 
t
h
e
 
f
u
n
d
a
m
e
n
t
a
l
 
s
c
a
l
e
 
m
o
v
e
:
 
o
n
e
 
e
x
p
e
n
s
i
v
e
 
j
o
b
 
p
e
r
 
v
i
d
e
o
,
 
t
h
e
n
 
c
h
e
a
p
 
b
y
t
e
-
s
e
r
v
e
 
t
o
 
e
v
e
r
y
 
v
i
e
w
e
r
 
f
o
r
e
v
e
r
.
 
O
n
-
d
e
m
a
n
d
 
t
r
a
n
s
c
o
d
i
n
g
 
d
o
e
s
n
'
t
 
s
c
a
l
e
 
t
o
 
b
i
l
l
i
o
n
s
 
o
f
 
v
i
e
w
s
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
 
9
9
%
 
o
f
 
t
h
e
 
b
y
t
e
 
t
r
a
f
f
i
c
 
s
e
r
v
e
d
 
f
r
o
m
 
t
h
e
 
C
D
N
,
 
n
o
t
 
t
h
e
 
o
r
i
g
i
n
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
a
n
d
o
m
.
"
,


 
 
 
 
 
 
 
 
"
C
D
N
 
e
d
g
e
s
 
a
r
e
 
p
h
y
s
i
c
a
l
l
y
 
c
l
o
s
e
 
t
o
 
v
i
e
w
e
r
s
,
 
d
r
a
m
a
t
i
c
a
l
l
y
 
l
o
w
e
r
 
l
a
t
e
n
c
y
.
 
O
r
i
g
i
n
 
w
o
u
l
d
 
s
a
t
u
r
a
t
e
 
a
t
 
a
 
t
i
n
y
 
f
r
a
c
t
i
o
n
 
o
f
 
Y
o
u
T
u
b
e
'
s
 
t
r
a
f
f
i
c
.
"
,


 
 
 
 
 
 
 
 
"
O
r
i
g
i
n
 
s
t
o
r
a
g
e
 
i
s
 
b
r
o
k
e
n
.
"
,


 
 
 
 
 
 
 
 
"
C
D
N
 
i
s
 
f
r
e
e
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
5
+
 
T
b
p
s
 
e
g
r
e
s
s
 
i
s
 
i
m
p
o
s
s
i
b
l
e
 
f
o
r
 
a
n
y
 
s
i
n
g
l
e
 
o
r
i
g
i
n
.
 
C
D
N
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
 
t
h
e
 
l
o
a
d
 
a
c
r
o
s
s
 
h
u
n
d
r
e
d
s
 
o
f
 
e
d
g
e
 
P
O
P
s
 
n
e
a
r
 
u
s
e
r
s
.
 
O
r
i
g
i
n
 
o
n
l
y
 
s
e
r
v
e
s
 
c
o
l
d
-
t
a
i
l
 
c
o
n
t
e
n
t
 
t
h
a
t
 
h
a
s
n
'
t
 
r
e
a
c
h
e
d
 
t
h
e
 
e
d
g
e
 
y
e
t
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
 
Y
o
u
T
u
b
e
'
s
 
v
i
d
e
o
 
o
b
j
e
c
t
 
s
t
o
r
e
 
s
e
p
a
r
a
t
e
 
f
r
o
m
 
t
h
e
 
m
e
t
a
d
a
t
a
 
D
B
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
I
t
 
d
o
e
s
n
'
t
.
"
,


 
 
 
 
 
 
 
 
"
M
e
t
a
d
a
t
a
 
(
t
i
t
l
e
,
 
o
w
n
e
r
,
 
v
i
e
w
 
c
o
u
n
t
)
 
i
s
 
s
m
a
l
l
 
+
 
q
u
e
r
i
e
d
 
o
f
t
e
n
 
→
 
r
e
l
a
t
i
o
n
a
l
 
D
B
.
 
V
i
d
e
o
 
b
y
t
e
s
 
a
r
e
 
h
u
g
e
 
+
 
w
r
i
t
e
-
o
n
c
e
-
r
e
a
d
-
m
a
n
y
 
→
 
o
b
j
e
c
t
 
s
t
o
r
a
g
e
 
/
 
C
D
N
.
 
D
i
f
f
e
r
e
n
t
 
a
c
c
e
s
s
 
p
a
t
t
e
r
n
s
,
 
d
i
f
f
e
r
e
n
t
 
s
t
o
r
e
s
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
 
S
3
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
u
t
t
i
n
g
 
b
i
n
a
r
y
 
b
l
o
b
s
 
i
n
 
a
 
r
e
l
a
t
i
o
n
a
l
 
D
B
 
i
s
 
a
n
 
a
n
t
i
-
p
a
t
t
e
r
n
 
a
t
 
t
h
i
s
 
s
c
a
l
e
.
 
M
e
t
a
d
a
t
a
 
s
t
a
y
s
 
i
n
 
a
 
n
o
r
m
a
l
 
i
n
d
e
x
e
d
 
D
B
;
 
v
i
d
e
o
 
c
h
u
n
k
s
 
l
i
v
e
 
a
s
 
f
l
a
t
 
o
b
j
e
c
t
s
 
i
n
 
S
3
-
l
i
k
e
 
s
t
o
r
a
g
e
 
t
h
a
t
'
s
 
o
p
t
i
m
i
z
e
d
 
f
o
r
 
s
e
q
u
e
n
t
i
a
l
 
r
e
a
d
s
 
a
n
d
 
C
D
N
 
i
n
t
e
g
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
 
Y
o
u
T
u
b
e
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
5
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
 
v
i
d
e
o
 
s
t
r
e
a
m
i
n
g
 
s
e
r
v
i
c
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
 
c
l
a
s
s
i
c
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


