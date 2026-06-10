
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
l
i
d
e
r
s
 
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
 
D
e
f
i
n
i
t
i
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




c
o
n
s
t
 
L
E
V
E
L
S
 
=
 
[


 
 
{


 
 
 
 
k
:
 
"
E
v
e
n
t
u
a
l
"
,


 
 
 
 
s
h
o
r
t
:
 
"
s
t
a
l
e
 
p
o
s
s
i
b
l
e
"
,


 
 
 
 
l
o
n
g
:
 
"
R
e
p
l
i
c
a
s
 
c
o
n
v
e
r
g
e
 
g
i
v
e
n
 
e
n
o
u
g
h
 
t
i
m
e
.
 
A
 
r
e
a
d
 
r
i
g
h
t
 
a
f
t
e
r
 
a
 
w
r
i
t
e
 
m
a
y
 
r
e
t
u
r
n
 
t
h
e
 
o
l
d
 
v
a
l
u
e
.
 
T
h
e
 
c
h
e
a
p
e
s
t
,
 
m
o
s
t
 
a
v
a
i
l
a
b
l
e
 
m
o
d
e
l
.
"
,


 
 
 
 
e
x
:
 
"
D
N
S
,
 
C
D
N
 
c
a
c
h
e
,
 
s
o
c
i
a
l
 
m
e
d
i
a
 
c
o
u
n
t
e
r
s
,
 
D
y
n
a
m
o
D
B
 
d
e
f
a
u
l
t
 
r
e
a
d
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
R
e
a
d
-
y
o
u
r
-
w
r
i
t
e
s
"
,


 
 
 
 
s
h
o
r
t
:
 
"
y
o
u
r
 
w
r
i
t
e
s
 
v
i
s
i
b
l
e
 
t
o
 
y
o
u
"
,


 
 
 
 
l
o
n
g
:
 
"
A
f
t
e
r
 
y
o
u
 
w
r
i
t
e
 
s
o
m
e
t
h
i
n
g
,
 
y
o
u
r
 
s
u
b
s
e
q
u
e
n
t
 
r
e
a
d
s
 
s
e
e
 
a
t
 
l
e
a
s
t
 
t
h
a
t
 
w
r
i
t
e
.
 
O
t
h
e
r
 
u
s
e
r
s
 
m
a
y
 
s
t
i
l
l
 
s
e
e
 
t
h
e
 
o
l
d
 
v
a
l
u
e
 
t
e
m
p
o
r
a
r
i
l
y
.
"
,


 
 
 
 
e
x
:
 
"
T
w
i
t
t
e
r
 
p
o
s
t
 
→
 
r
e
f
r
e
s
h
 
s
h
o
w
s
 
y
o
u
r
 
t
w
e
e
t
.
 
S
t
i
c
k
y
-
r
o
u
t
i
n
g
 
t
h
e
 
w
r
i
t
e
r
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
 
b
r
i
e
f
l
y
 
i
s
 
t
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
 
f
i
x
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
M
o
n
o
t
o
n
i
c
 
R
e
a
d
s
"
,


 
 
 
 
s
h
o
r
t
:
 
"
n
o
 
t
i
m
e
-
t
r
a
v
e
l
"
,


 
 
 
 
l
o
n
g
:
 
"
O
n
c
e
 
a
 
u
s
e
r
 
s
e
e
s
 
v
a
l
u
e
 
v
=
5
,
 
n
o
 
l
a
t
e
r
 
r
e
a
d
 
b
y
 
t
h
e
m
 
r
e
t
u
r
n
s
 
v
<
5
 
—
 
e
v
e
n
 
w
h
e
n
 
r
e
a
d
s
 
a
r
e
 
r
o
u
t
e
d
 
t
o
 
d
i
f
f
e
r
e
n
t
 
r
e
p
l
i
c
a
s
 
a
t
 
d
i
f
f
e
r
e
n
t
 
l
a
g
.
"
,


 
 
 
 
e
x
:
 
"
N
e
w
s
f
e
e
d
 
p
a
g
i
n
a
t
i
o
n
.
 
Y
o
u
 
s
h
o
u
l
d
n
'
t
 
s
e
e
 
p
o
s
t
-
2
3
 
t
h
e
n
 
l
a
t
e
r
 
n
o
t
 
s
e
e
 
i
t
.
"
,


 
 
}
,


 
 
{


 
 
 
 
k
:
 
"
L
i
n
e
a
r
i
z
a
b
l
e
"
,


 
 
 
 
s
h
o
r
t
:
 
"
a
s
 
i
f
 
o
n
e
 
m
a
c
h
i
n
e
"
,


 
 
 
 
l
o
n
g
:
 
"
E
v
e
r
y
 
o
p
e
r
a
t
i
o
n
 
a
p
p
e
a
r
s
 
t
o
 
h
a
p
p
e
n
 
a
t
 
a
 
s
i
n
g
l
e
 
p
o
i
n
t
 
i
n
 
t
i
m
e
,
 
i
n
 
a
 
s
i
n
g
l
e
 
g
l
o
b
a
l
 
o
r
d
e
r
.
 
T
h
e
 
s
t
r
i
c
t
e
s
t
 
m
o
d
e
l
.
"
,


 
 
 
 
e
x
:
 
"
S
p
a
n
n
e
r
,
 
e
t
c
d
,
 
Z
o
o
K
e
e
p
e
r
.
 
B
a
n
k
i
n
g
 
l
e
d
g
e
r
s
,
 
l
e
a
d
e
r
 
e
l
e
c
t
i
o
n
,
 
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
 
l
o
c
k
s
.
"
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
 
D
e
f
i
n
i
t
i
o
n
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
 
c
o
n
s
i
s
t
e
n
c
y
 
s
p
e
c
t
r
u
m
,
 
w
e
a
k
e
s
t
 
t
o
 
s
t
r
o
n
g
e
s
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
 
s
y
s
t
e
m
s
 
t
r
a
d
e
 
<
b
>
c
o
n
s
i
s
t
e
n
c
y
<
/
b
>
 
a
g
a
i
n
s
t
 
<
b
>
a
v
a
i
l
a
b
i
l
i
t
y
<
/
b
>
 
a
n
d
 
<
b
>
l
a
t
e
n
c
y
<
/
b
>
.


 
 
 
 
 
 
 
 
T
h
e
 
f
o
u
r
 
m
o
s
t
-
c
i
t
e
d
 
p
o
i
n
t
s
 
o
n
 
t
h
e
 
s
p
e
c
t
r
u
m
,
 
f
r
o
m
 
c
h
e
a
p
e
s
t
 
t
o
 
m
o
s
t
 
e
x
p
e
n
s
i
v
e
:


 
 
 
 
 
 
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
8
 
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
 
m
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
L
E
V
E
L
S
.
m
a
p
(
(
c
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
/
/
 
G
r
a
d
i
e
n
t
:
 
l
i
m
e
 
→
 
a
m
b
e
r
 
→
 
p
u
r
p
l
e
 
→
 
S
D
 
a
s
 
i
t
 
g
e
t
s
 
s
t
r
i
c
t
e
r


 
 
 
 
 
 
 
 
 
 
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
 
[
N
E
U
T
R
A
L
,
 
W
A
R
N
,
 
P
U
R
P
L
E
,
 
S
D
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
 
=
 
c
o
l
o
r
s
[
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
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
0
 
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
 
8
 
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
5
r
e
m
"
 
}
}
>
{
c
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
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
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
R
a
d
i
u
s
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
L
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
{
c
.
s
h
o
r
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
c
.
l
o
n
g
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
 
p
a
d
d
i
n
g
T
o
p
:
 
8
,
 
b
o
r
d
e
r
T
o
p
:
 
`
1
p
x
 
d
a
s
h
e
d
 
$
{
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
c
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


 
 
 
 
 
 
 
 
 
 
T
H
E
 
C
O
S
T
 
O
F
 
G
O
I
N
G
 
S
T
R
I
C
T
E
R


 
 
 
 
 
 
 
 
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
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
E
a
c
h
 
s
t
e
p
 
t
o
w
a
r
d
 
l
i
n
e
a
r
i
z
a
b
l
e
 
a
d
d
s
 
<
b
>
c
o
o
r
d
i
n
a
t
i
o
n
<
/
b
>
 
(
r
e
p
l
i
c
a
s
 
m
u
s
t
 
a
g
r
e
e
 
b
e
f
o
r
e


 
 
 
 
 
 
 
 
 
 
r
e
p
l
y
i
n
g
)
.
 
T
h
a
t
 
c
o
o
r
d
i
n
a
t
i
o
n
 
c
o
s
t
s
 
<
b
>
l
a
t
e
n
c
y
<
/
b
>
 
(
e
x
t
r
a
 
r
o
u
n
d
 
t
r
i
p
s
)
 
a
n
d


 
 
 
 
 
 
 
 
 
 
<
b
>
 
a
v
a
i
l
a
b
i
l
i
t
y
<
/
b
>
 
(
d
u
r
i
n
g
 
a
 
p
a
r
t
i
t
i
o
n
,
 
s
o
m
e
 
r
e
p
l
i
c
a
s
 
c
a
n
&
r
s
q
u
o
;
t
 
c
o
o
r
d
i
n
a
t
e
,
 
s
o
 
t
h
e
y
 
r
e
j
e
c
t


 
 
 
 
 
 
 
 
 
 
r
e
q
u
e
s
t
s
)
.
 
T
h
e
 
C
A
P
 
t
h
e
o
r
e
m
 
i
s
 
j
u
s
t
 
a
 
s
p
e
c
i
a
l
 
c
a
s
e
 
o
f
 
t
h
i
s
 
t
r
a
d
e
.


 
 
 
 
 
 
 
 
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
 
S
l
i
d
e
r
 
o
v
e
r
 
3
-
r
e
p
l
i
c
a
 
c
l
u
s
t
e
r
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
S
t
r
e
n
g
t
h
 
=
 
"
e
v
e
n
t
u
a
l
"
 
|
 
"
r
y
o
w
"
 
|
 
"
m
o
n
o
t
o
n
i
c
"
 
|
 
"
l
i
n
e
a
r
i
z
a
b
l
e
"
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
 
R
e
a
d
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


 
 
w
h
o
:
 
"
u
s
e
r
-
A
"
 
|
 
"
u
s
e
r
-
B
"
;


 
 
r
e
p
l
i
c
a
:
 
0
 
|
 
1
 
|
 
2
;


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
/
/
 
v
e
r
s
i
o
n
 
v
i
s
i
b
l
e
 
t
o
 
r
e
a
d
e
r


}




c
o
n
s
t
 
S
I
M
_
M
S
 
=
 
1
2
0
0
0
;


c
o
n
s
t
 
T
I
C
K
_
M
S
 
=
 
1
0
0
;




f
u
n
c
t
i
o
n
 
C
o
n
s
i
s
t
e
n
c
y
S
l
i
d
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
s
t
r
e
n
g
t
h
,
 
s
e
t
S
t
r
e
n
g
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
<
S
t
r
e
n
g
t
h
>
(
"
e
v
e
n
t
u
a
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
N
o
w
,
 
s
e
t
T
N
o
w
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




 
 
/
/
 
R
e
p
l
i
c
a
 
v
e
r
s
i
o
n
s
 
o
v
e
r
 
t
i
m
e
 
(
p
r
e
-
c
o
m
p
u
t
e
d
)


 
 
/
/
 
P
r
i
m
a
r
y
 
w
r
i
t
e
s
 
h
a
p
p
e
n
 
a
t
 
t
=
2
s
,
 
t
=
5
s
,
 
t
=
9
s


 
 
/
/
 
R
e
p
l
i
c
a
 
l
a
g
:
 
r
0
 
=
 
0
m
s
 
(
p
r
i
m
a
r
y
)
,
 
r
1
 
=
 
8
0
0
m
s
,
 
r
2
 
=
 
2
2
0
0
m
s


 
 
c
o
n
s
t
 
w
r
i
t
e
s
 
=
 
[


 
 
 
 
{
 
t
:
 
2
0
0
0
,
 
v
:
 
1
 
}
,


 
 
 
 
{
 
t
:
 
5
0
0
0
,
 
v
:
 
2
 
}
,


 
 
 
 
{
 
t
:
 
9
0
0
0
,
 
v
:
 
3
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
l
a
g
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
=
 
[
0
,
 
8
0
0
,
 
2
2
0
0
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
 
v
e
r
s
i
o
n
A
t
(
r
e
p
l
i
c
a
:
 
0
 
|
 
1
 
|
 
2
,
 
t
:
 
n
u
m
b
e
r
)
:
 
n
u
m
b
e
r
 
{


 
 
 
 
l
e
t
 
v
 
=
 
0
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
w
 
o
f
 
w
r
i
t
e
s
)
 
{


 
 
 
 
 
 
i
f
 
(
t
 
>
=
 
w
.
t
 
+
 
l
a
g
[
r
e
p
l
i
c
a
]
)
 
v
 
=
 
w
.
v
;


 
 
 
 
}


 
 
 
 
r
e
t
u
r
n
 
v
;


 
 
}




 
 
/
/
 
P
r
e
-
b
u
i
l
t
 
r
e
a
d
 
e
v
e
n
t
s
:
 
a
l
t
e
r
n
a
t
i
n
g
 
u
s
e
r
-
A
 
a
n
d
 
u
s
e
r
-
B
 
r
e
a
d
s
 
e
v
e
r
y
 
5
0
0
m
s


 
 
c
o
n
s
t
 
r
e
a
d
s
:
 
R
e
a
d
E
v
e
n
t
[
]
 
=
 
[
]
;


 
 
l
e
t
 
u
s
e
r
A
S
t
a
t
e
 
=
 
0
;


 
 
l
e
t
 
u
s
e
r
A
L
a
s
t
R
e
p
l
i
c
a
:
 
0
 
|
 
1
 
|
 
2
 
=
 
0
;


 
 
f
o
r
 
(
l
e
t
 
t
 
=
 
7
0
0
;
 
t
 
<
 
S
I
M
_
M
S
;
 
t
 
+
=
 
7
0
0
)
 
{


 
 
 
 
c
o
n
s
t
 
w
h
o
:
 
"
u
s
e
r
-
A
"
 
|
 
"
u
s
e
r
-
B
"
 
=
 
(
t
 
/
 
7
0
0
)
 
%
 
2
 
=
=
=
 
0
 
?
 
"
u
s
e
r
-
A
"
 
:
 
"
u
s
e
r
-
B
"
;


 
 
 
 
/
/
 
r
o
u
n
d
-
r
o
b
i
n
 
r
e
p
l
i
c
a


 
 
 
 
l
e
t
 
r
e
p
l
i
c
a
 
=
 
(
(
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
 
7
0
0
)
)
 
%
 
3
)
 
a
s
 
0
 
|
 
1
 
|
 
2
;




 
 
 
 
/
/
 
A
p
p
l
y
 
s
t
r
e
n
g
t
h
 
r
u
l
e
s


 
 
 
 
l
e
t
 
v
 
=
 
v
e
r
s
i
o
n
A
t
(
r
e
p
l
i
c
a
,
 
t
)
;




 
 
 
 
i
f
 
(
s
t
r
e
n
g
t
h
 
=
=
=
 
"
r
y
o
w
"
 
&
&
 
w
h
o
 
=
=
=
 
"
u
s
e
r
-
A
"
)
 
{


 
 
 
 
 
 
/
/
 
A
f
t
e
r
 
u
s
e
r
-
A
 
w
r
i
t
e
s
 
(
w
e
'
l
l
 
s
a
y
 
u
s
e
r
-
A
 
i
s
 
t
h
e
 
w
r
i
t
e
r
)
,
 
p
i
n
 
t
o
 
p
r
i
m
a
r
y


 
 
 
 
 
 
r
e
p
l
i
c
a
 
=
 
0
;


 
 
 
 
 
 
v
 
=
 
v
e
r
s
i
o
n
A
t
(
0
,
 
t
)
;


 
 
 
 
}


 
 
 
 
i
f
 
(
s
t
r
e
n
g
t
h
 
=
=
=
 
"
m
o
n
o
t
o
n
i
c
"
 
&
&
 
w
h
o
 
=
=
=
 
"
u
s
e
r
-
A
"
)
 
{


 
 
 
 
 
 
/
/
 
S
t
i
c
k
 
t
o
 
a
 
r
e
p
l
i
c
a
 
w
i
t
h
 
a
t
 
l
e
a
s
t
 
t
h
e
 
v
e
r
s
i
o
n
 
t
h
e
y
 
l
a
s
t
 
s
a
w


 
 
 
 
 
 
i
f
 
(
v
 
<
 
u
s
e
r
A
S
t
a
t
e
)
 
{


 
 
 
 
 
 
 
 
/
/
 
b
u
m
p
 
t
o
 
a
 
r
e
p
l
i
c
a
 
t
h
a
t
 
h
a
s
 
a
t
 
l
e
a
s
t
 
u
s
e
r
A
S
t
a
t
e
 
(
u
s
e
 
p
r
i
m
a
r
y
)


 
 
 
 
 
 
 
 
r
e
p
l
i
c
a
 
=
 
0
;


 
 
 
 
 
 
 
 
v
 
=
 
v
e
r
s
i
o
n
A
t
(
0
,
 
t
)
;


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
i
f
 
(
s
t
r
e
n
g
t
h
 
=
=
=
 
"
l
i
n
e
a
r
i
z
a
b
l
e
"
)
 
{


 
 
 
 
 
 
/
/
 
e
v
e
r
y
 
r
e
a
d
 
g
o
e
s
 
t
o
 
p
r
i
m
a
r
y
 
(
o
r
 
q
u
o
r
u
m
,
 
e
q
u
i
v
a
l
e
n
t
 
h
e
r
e
)


 
 
 
 
 
 
r
e
p
l
i
c
a
 
=
 
0
;


 
 
 
 
 
 
v
 
=
 
v
e
r
s
i
o
n
A
t
(
0
,
 
t
)
;


 
 
 
 
}




 
 
 
 
i
f
 
(
w
h
o
 
=
=
=
 
"
u
s
e
r
-
A
"
)
 
{


 
 
 
 
 
 
u
s
e
r
A
S
t
a
t
e
 
=
 
M
a
t
h
.
m
a
x
(
u
s
e
r
A
S
t
a
t
e
,
 
v
)
;


 
 
 
 
 
 
u
s
e
r
A
L
a
s
t
R
e
p
l
i
c
a
 
=
 
r
e
p
l
i
c
a
;


 
 
 
 
}




 
 
 
 
r
e
a
d
s
.
p
u
s
h
(
{
 
t
,
 
w
h
o
,
 
r
e
p
l
i
c
a
,
 
v
a
l
u
e
:
 
v
 
}
)
;


 
 
}




 
 
/
/
 
r
e
m
o
v
e
 
u
n
u
s
e
d
 
r
e
f
e
r
e
n
c
e
 
w
a
r
n
i
n
g


 
 
v
o
i
d
 
u
s
e
r
A
L
a
s
t
R
e
p
l
i
c
a
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


 
 
 
 
 
 
s
e
t
T
N
o
w
(
(
t
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
 
t
 
+
 
T
I
C
K
_
M
S
;


 
 
 
 
 
 
 
 
i
f
 
(
n
e
x
t
 
>
=
 
S
I
M
_
M
S
)
 
{


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
S
I
M
_
M
S
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
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
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
T
I
C
K
_
M
S
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
T
N
o
w
(
0
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
 
v
i
s
i
b
l
e
R
e
a
d
s
 
=
 
r
e
a
d
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
r
)
 
=
>
 
r
.
t
 
<
=
 
t
N
o
w
)
;


 
 
c
o
n
s
t
 
u
s
e
r
A
R
e
a
d
s
 
=
 
v
i
s
i
b
l
e
R
e
a
d
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
r
)
 
=
>
 
r
.
w
h
o
 
=
=
=
 
"
u
s
e
r
-
A
"
)
;


 
 
/
/
 
D
e
t
e
c
t
 
a
n
o
m
a
l
i
e
s
 
f
o
r
 
u
s
e
r
 
A
:
 
r
e
g
r
e
s
s
i
o
n


 
 
c
o
n
s
t
 
u
s
e
r
A
V
a
l
u
e
s
 
=
 
u
s
e
r
A
R
e
a
d
s
.
m
a
p
(
(
r
)
 
=
>
 
r
.
v
a
l
u
e
)
;


 
 
l
e
t
 
r
e
g
r
e
s
s
i
o
n
 
=
 
f
a
l
s
e
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
1
;
 
i
 
<
 
u
s
e
r
A
V
a
l
u
e
s
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
i
f
 
(
u
s
e
r
A
V
a
l
u
e
s
[
i
]
 
<
 
u
s
e
r
A
V
a
l
u
e
s
[
i
 
-
 
1
]
)
 
{


 
 
 
 
 
 
r
e
g
r
e
s
s
i
o
n
 
=
 
t
r
u
e
;


 
 
 
 
 
 
b
r
e
a
k
;


 
 
 
 
}


 
 
}




 
 
c
o
n
s
t
 
r
e
p
l
i
c
a
N
o
w
:
 
[
n
u
m
b
e
r
,
 
n
u
m
b
e
r
,
 
n
u
m
b
e
r
]
 
=
 
[
v
e
r
s
i
o
n
A
t
(
0
,
 
t
N
o
w
)
,
 
v
e
r
s
i
o
n
A
t
(
1
,
 
t
N
o
w
)
,
 
v
e
r
s
i
o
n
A
t
(
2
,
 
t
N
o
w
)
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
S
l
i
d
e
.
 
W
a
t
c
h
 
w
h
i
c
h
 
v
e
r
s
i
o
n
s
 
r
e
a
d
s
 
r
e
t
u
r
n
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
h
r
e
e
 
r
e
p
l
i
c
a
s
.
 
P
r
i
m
a
r
y
 
a
t
 
t
h
e
 
t
o
p
,
 
t
w
o
 
l
a
g
g
e
d
 
b
y
 
0
.
8
s
 
a
n
d
 
2
.
2
s
.
 
T
h
r
e
e
 
w
r
i
t
e
s
 
h
a
p
p
e
n


 
 
 
 
 
 
 
 
d
u
r
i
n
g
 
t
h
e
 
s
i
m
u
l
a
t
i
o
n
 
(
v
1
,
 
v
2
,
 
v
3
)
.
 
P
i
c
k
 
a
 
c
o
n
s
i
s
t
e
n
c
y
 
l
e
v
e
l
 
—
 
y
o
u
&
r
s
q
u
o
;
l
l
 
s
e
e
 
w
h
a
t
 
e
a
c
h


 
 
 
 
 
 
 
 
u
s
e
r
 
a
c
t
u
a
l
l
y
 
s
e
e
s
 
o
v
e
r
 
t
i
m
e
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
{
/
*
 
S
l
i
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
g
-
s
u
b
t
l
e
)
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
6
p
x
 
1
8
p
x
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
 
1
8
 
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
 
1
0
 
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
e
m
"
 
}
}
>
W
E
A
K
E
R
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
e
m
"
 
}
}
>
S
T
R
O
N
G
E
R
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
r
e
p
e
a
t
(
4
,
 
1
f
r
)
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


 
 
 
 
 
 
 
 
 
 
{
(
[
"
e
v
e
n
t
u
a
l
"
,
 
"
r
y
o
w
"
,
 
"
m
o
n
o
t
o
n
i
c
"
,
 
"
l
i
n
e
a
r
i
z
a
b
l
e
"
]
 
a
s
 
S
t
r
e
n
g
t
h
[
]
)
.
m
a
p
(
(
s
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
 
s
t
r
e
n
g
t
h
 
=
=
=
 
s
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
l
a
b
e
l
s
 
=
 
{
 
e
v
e
n
t
u
a
l
:
 
"
E
v
e
n
t
u
a
l
"
,
 
r
y
o
w
:
 
"
R
e
a
d
-
Y
o
u
r
-
W
r
i
t
e
s
"
,
 
m
o
n
o
t
o
n
i
c
:
 
"
M
o
n
o
t
o
n
i
c
"
,
 
l
i
n
e
a
r
i
z
a
b
l
e
:
 
"
L
i
n
e
a
r
i
z
a
b
l
e
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
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
6
 
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
 
{
 
s
e
t
S
t
r
e
n
g
t
h
(
s
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
a
c
t
i
v
e
 
?
 
S
D
 
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
3
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
S
D
}
2
2
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
 
S
D
 
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
B
o
t
t
o
m
:
 
2
 
}
}
>
L
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
a
b
e
l
s
[
s
]
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
 
R
e
p
l
i
c
a
s
 
s
t
a
t
e
 
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
2
 
m
b
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
]
.
m
a
p
(
(
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
 
v
 
=
 
r
e
p
l
i
c
a
N
o
w
[
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
`
$
{
S
D
}
5
5
`
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
E
P
L
I
C
A
 
{
i
}
 
{
i
 
=
=
=
 
0
 
?
 
"
(
P
R
I
M
A
R
Y
)
"
 
:
 
`
(
+
$
{
l
a
g
[
i
]
}
m
s
)
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
v
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
 
4
 
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
4
 
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
.
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
{
v
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




 
 
 
 
 
 
 
 
{
/
*
 
R
e
a
d
 
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
 
8
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
 
m
i
n
H
e
i
g
h
t
:
 
2
2
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
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
R
E
A
D
S
 
·
 
t
i
m
e
-
o
r
d
e
r
e
d


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
{
v
i
s
i
b
l
e
R
e
a
d
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
a
r
t
 
t
h
e
 
s
i
m
u
l
a
t
i
o
n


 
 
 
 
 
 
 
 
 
 
 
 
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
v
i
s
i
b
l
e
R
e
a
d
s
.
s
l
i
c
e
(
-
1
2
)
.
m
a
p
(
(
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
 
u
s
e
r
C
o
l
o
r
 
=
 
r
.
w
h
o
 
=
=
=
 
"
u
s
e
r
-
A
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
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
r
.
t
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
6
0
p
x
 
8
0
p
x
 
8
0
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
 
8
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
5
p
x
 
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
R
a
d
i
u
s
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
 
`
$
{
u
s
e
r
C
o
l
o
r
}
1
0
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
p
x
 
s
o
l
i
d
 
$
{
u
s
e
r
C
o
l
o
r
}
2
2
`
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
(
r
.
t
 
/
 
1
0
0
0
)
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
s
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
 
u
s
e
r
C
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
 
7
0
0
 
}
}
>
{
r
.
w
h
o
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
 
}
}
>
r
{
r
.
r
e
p
l
i
c
a
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
r
e
a
d
 
→
 
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
 
u
s
e
r
C
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
 
7
0
0
 
}
}
>
v
{
r
.
v
a
l
u
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
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
,
 
f
a
l
s
e
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
 
t
N
o
w
 
>
=
 
S
I
M
_
M
S
 
?
 
"
r
e
p
l
a
y
"
 
:
 
t
N
o
w
 
>
 
0
 
?
 
"
r
e
s
u
m
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
,
 
f
a
l
s
e
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
l
e
x
:
 
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
t
 
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
(
t
N
o
w
 
/
 
1
0
0
0
)
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
s
<
/
s
p
a
n
>
 
/
 
1
2
.
0
s


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
{
t
N
o
w
 
>
 
0
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
$
{
s
t
r
e
n
g
t
h
}
-
$
{
r
e
g
r
e
s
s
i
o
n
}
`
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
 
r
e
g
r
e
s
s
i
o
n
 
?
 
`
$
{
W
A
R
N
}
1
4
`
 
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
r
e
g
r
e
s
s
i
o
n
 
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
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
e
g
r
e
s
s
i
o
n
 
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
r
e
g
r
e
s
s
i
o
n
 
?
 
"
A
N
O
M
A
L
Y
"
 
:
 
"
O
K
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
s
t
r
e
n
g
t
h
 
=
=
=
 
"
e
v
e
n
t
u
a
l
"
 
&
&
 
r
e
g
r
e
s
s
i
o
n
 
&
&
 
"
U
s
e
r
 
A
 
r
e
a
d
 
v
3
,
 
t
h
e
n
 
l
a
t
e
r
 
r
e
a
d
 
v
0
 
—
 
w
e
n
t
 
B
A
C
K
W
A
R
D
S
 
i
n
 
t
i
m
e
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
 
e
v
e
n
t
u
a
l
-
c
o
n
s
i
s
t
e
n
c
y
 
c
o
s
t
:
 
r
e
p
l
i
c
a
s
 
a
t
 
d
i
f
f
e
r
e
n
t
 
l
a
g
,
 
n
o
 
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
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
r
e
n
g
t
h
 
=
=
=
 
"
e
v
e
n
t
u
a
l
"
 
&
&
 
!
r
e
g
r
e
s
s
i
o
n
 
&
&
 
"
R
e
p
l
i
c
a
s
 
c
o
n
v
e
r
g
e
 
b
u
t
 
r
e
a
d
s
 
c
a
n
 
b
e
 
s
t
a
l
e
.
 
S
o
 
f
a
r
 
n
o
 
r
e
g
r
e
s
s
i
o
n
 
f
o
r
 
U
s
e
r
 
A
 
i
n
 
t
h
i
s
 
s
a
m
p
l
e
,
 
b
u
t
 
i
t
'
s
 
p
o
s
s
i
b
l
e
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
r
e
n
g
t
h
 
=
=
=
 
"
r
y
o
w
"
 
&
&
 
"
U
s
e
r
 
A
'
s
 
r
e
a
d
s
 
a
r
e
 
p
i
n
n
e
d
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
 
f
o
r
 
a
t
 
l
e
a
s
t
 
t
h
e
i
r
 
o
w
n
 
w
r
i
t
e
s
.
 
T
h
e
y
 
n
e
v
e
r
 
s
e
e
 
t
h
e
i
r
 
o
w
n
 
c
h
a
n
g
e
s
 
v
a
n
i
s
h
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
r
e
n
g
t
h
 
=
=
=
 
"
m
o
n
o
t
o
n
i
c
"
 
&
&
 
"
U
s
e
r
 
A
 
n
e
v
e
r
 
s
e
e
s
 
a
 
v
e
r
s
i
o
n
 
o
l
d
e
r
 
t
h
a
n
 
w
h
a
t
 
t
h
e
y
 
p
r
e
v
i
o
u
s
l
y
 
s
a
w
.
 
R
e
a
d
s
 
c
a
n
 
s
t
i
l
l
 
b
e
 
s
t
a
l
e
 
r
e
l
a
t
i
v
e
 
t
o
 
o
t
h
e
r
 
u
s
e
r
s
,
 
b
u
t
 
n
e
v
e
r
 
t
i
m
e
-
t
r
a
v
e
l
.
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
r
e
n
g
t
h
 
=
=
=
 
"
l
i
n
e
a
r
i
z
a
b
l
e
"
 
&
&
 
"
E
v
e
r
y
 
r
e
a
d
 
g
o
e
s
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
 
(
o
r
 
q
u
o
r
u
m
)
.
 
E
v
e
r
y
 
r
e
a
d
 
s
e
e
s
 
t
h
e
 
l
a
t
e
s
t
 
w
r
i
t
e
 
f
r
o
m
 
a
n
y
o
n
e
.
 
S
t
r
o
n
g
e
s
t
,
 
m
o
s
t
 
e
x
p
e
n
s
i
v
e
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
,
 
d
i
s
a
b
l
e
d
:
 
b
o
o
l
e
a
n
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
 
d
i
s
a
b
l
e
d
 
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


 
 
 
 
o
p
a
c
i
t
y
:
 
d
i
s
a
b
l
e
d
 
?
 
0
.
5
 
:
 
1
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
 
P
i
c
k
i
n
g
 
t
h
e
 
r
i
g
h
t
 
l
e
v
e
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
C
K
S
 
=
 
[


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
B
a
n
k
 
b
a
l
a
n
c
e
 
d
i
s
p
l
a
y
"
,
 
l
v
l
:
 
"
L
i
n
e
a
r
i
z
a
b
l
e
"
,
 
r
e
a
s
o
n
:
 
"
M
o
n
e
y
.
 
U
s
e
r
s
 
t
o
l
e
r
a
t
e
 
l
a
t
e
n
c
y
 
m
o
r
e
 
t
h
a
n
 
t
h
e
y
 
t
o
l
e
r
a
t
e
 
s
e
e
i
n
g
 
t
h
e
 
w
r
o
n
g
 
n
u
m
b
e
r
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
T
w
i
t
t
e
r
 
f
e
e
d
 
p
a
g
i
n
a
t
i
o
n
"
,
 
l
v
l
:
 
"
M
o
n
o
t
o
n
i
c
 
R
e
a
d
s
"
,
 
r
e
a
s
o
n
:
 
"
D
o
n
'
t
 
s
h
o
w
 
p
o
s
t
-
2
3
,
 
t
h
e
n
 
l
a
t
e
r
 
n
o
t
 
s
h
o
w
 
i
t
.
 
U
s
e
r
s
 
d
o
n
'
t
 
n
o
t
i
c
e
 
1
s
 
o
f
 
s
t
a
l
e
n
e
s
s
,
 
b
u
t
 
D
O
 
n
o
t
i
c
e
 
p
o
s
t
s
 
v
a
n
i
s
h
i
n
g
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
U
s
e
r
 
p
r
o
f
i
l
e
 
e
d
i
t
"
,
 
l
v
l
:
 
"
R
e
a
d
-
Y
o
u
r
-
W
r
i
t
e
s
"
,
 
r
e
a
s
o
n
:
 
"
A
f
t
e
r
 
s
a
v
i
n
g
,
 
t
h
e
 
n
e
x
t
 
r
e
l
o
a
d
 
s
h
o
u
l
d
 
s
h
o
w
 
t
h
e
 
n
e
w
 
b
i
o
.
 
O
t
h
e
r
 
u
s
e
r
s
 
s
e
e
i
n
g
 
i
t
 
2
s
 
l
a
t
e
r
 
i
s
 
f
i
n
e
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
:
 
"
L
i
k
e
 
/
 
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
"
,
 
l
v
l
:
 
"
E
v
e
n
t
u
a
l
"
,
 
r
e
a
s
o
n
:
 
"
O
f
f
 
b
y
 
5
 
l
i
k
e
s
 
f
o
r
 
3
 
s
e
c
o
n
d
s
 
i
s
 
i
n
v
i
s
i
b
l
e
.
 
G
o
i
n
g
 
s
t
r
i
c
t
 
h
e
r
e
 
j
u
s
t
 
s
l
o
w
s
 
t
h
e
 
p
a
g
e
 
l
o
a
d
 
f
o
r
 
n
o
b
o
d
y
'
s
 
b
e
n
e
f
i
t
.
"
 
}
,


 
 
{
 
w
o
r
k
l
o
a
d
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
d
 
l
o
c
k
 
/
 
l
e
a
d
e
r
 
e
l
e
c
t
i
o
n
"
,
 
l
v
l
:
 
"
L
i
n
e
a
r
i
z
a
b
l
e
"
,
 
r
e
a
s
o
n
:
 
"
T
w
o
 
l
e
a
d
e
r
s
 
i
s
 
a
 
c
o
r
r
e
c
t
n
e
s
s
 
n
i
g
h
t
m
a
r
e
.
 
S
p
a
n
n
e
r
 
/
 
e
t
c
d
 
/
 
Z
o
o
K
e
e
p
e
r
 
e
x
i
s
t
 
e
x
a
c
t
l
y
 
f
o
r
 
t
h
i
s
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
c
k
s
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
P
i
c
k
i
n
g
 
t
h
e
 
r
i
g
h
t
 
l
e
v
e
l
 
f
o
r
 
t
h
e
 
j
o
b
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
 
r
u
l
e
:
 
a
s
 
w
e
a
k
 
a
s
 
y
o
u
 
c
a
n
 
t
o
l
e
r
a
t
e
,
 
a
s
 
s
t
r
o
n
g
 
a
s
 
y
o
u
r
 
c
o
r
r
e
c
t
n
e
s
s
 
r
e
q
u
i
r
e
s
.
 
F
i
v
e
 
r
e
a
l


 
 
 
 
 
 
 
 
w
o
r
k
l
o
a
d
s
 
w
i
t
h
 
t
h
e
 
l
e
v
e
l
 
y
o
u
&
r
s
q
u
o
;
d
 
a
c
t
u
a
l
l
y
 
p
i
c
k
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
P
I
C
K
S
.
m
a
p
(
(
p
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
w
o
r
k
l
o
a
d
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


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
y
:
 
-
2
 
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
 
4
0
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
5
 
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
r
e
m
"
 
}
}
>
{
p
.
w
o
r
k
l
o
a
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
0
6
e
m
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
 
"
3
p
x
 
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
R
a
d
i
u
s
:
 
4
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
l
v
l
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
r
e
a
s
o
n
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
3
_
C
o
n
s
i
s
t
e
n
c
y
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
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
e
f
i
n
i
t
i
o
n
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
D
e
f
i
n
i
t
i
o
n
 
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
S
l
i
d
e
 
t
h
e
 
K
n
o
b
"
,
 
i
c
o
n
:
 
<
S
l
i
d
e
r
s
 
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
C
o
n
s
i
s
t
e
n
c
y
S
l
i
d
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
r
e
a
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
R
e
a
l
 
P
i
c
k
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
P
i
c
k
s
 
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
 
u
s
e
r
 
p
o
s
t
s
 
a
 
t
w
e
e
t
,
 
t
h
e
n
 
r
e
f
r
e
s
h
e
s
 
t
h
e
i
r
 
p
r
o
f
i
l
e
 
a
n
d
 
d
o
e
s
n
'
t
 
s
e
e
 
i
t
.
 
T
h
e
 
r
e
p
l
i
c
a
 
t
h
e
y
 
h
i
t
 
l
a
g
s
 
b
y
 
2
s
.
 
W
h
i
c
h
 
g
u
a
r
a
n
t
e
e
 
w
o
u
l
d
 
h
a
v
e
 
f
i
x
e
d
 
t
h
i
s
 
w
i
t
h
o
u
t
 
f
o
r
c
i
n
g
 
a
l
l
 
r
e
a
d
s
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
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
E
v
e
n
t
u
a
l
"
,
 
"
R
e
a
d
-
Y
o
u
r
-
W
r
i
t
e
s
 
(
r
o
u
t
e
 
t
h
e
 
w
r
i
t
e
r
'
s
 
r
e
a
d
s
 
t
o
 
t
h
e
 
p
r
i
m
a
r
y
 
b
r
i
e
f
l
y
)
"
,
 
"
L
i
n
e
a
r
i
z
a
b
l
e
"
,
 
"
M
o
n
o
t
o
n
i
c
 
R
e
a
d
s
"
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
R
Y
O
W
 
p
i
n
s
 
o
n
l
y
 
t
h
e
 
w
r
i
t
e
r
'
s
 
r
e
a
d
s
 
t
o
 
f
r
e
s
h
 
s
t
a
t
e
 
f
o
r
 
a
 
s
h
o
r
t
 
w
i
n
d
o
w
.
 
O
t
h
e
r
 
u
s
e
r
s
 
s
t
i
l
l
 
g
e
t
 
t
h
e
 
c
h
e
a
p
,
 
l
a
g
g
e
d
 
r
e
p
l
i
c
a
s
.
 
L
i
n
e
a
r
i
z
a
b
l
e
 
w
o
u
l
d
 
a
l
s
o
 
w
o
r
k
 
b
u
t
 
g
l
o
b
a
l
l
y
;
 
R
Y
O
W
 
i
s
 
t
h
e
 
c
h
e
a
p
e
r
 
l
o
c
a
l
 
f
i
x
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
 
l
i
n
e
a
r
i
z
a
b
l
e
 
c
o
n
s
i
s
t
e
n
c
y
 
m
o
r
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
 
t
h
a
n
 
e
v
e
n
t
u
a
l
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
 
u
s
e
s
 
m
o
r
e
 
d
i
s
k
.
"
,


 
 
 
 
 
 
 
 
"
E
v
e
r
y
 
r
e
a
d
 
n
e
e
d
s
 
t
h
e
 
l
a
t
e
s
t
 
c
o
m
m
i
t
t
e
d
 
v
a
l
u
e
,
 
w
h
i
c
h
 
f
o
r
c
e
s
 
c
o
o
r
d
i
n
a
t
i
o
n
 
(
p
r
i
m
a
r
y
,
 
q
u
o
r
u
m
,
 
o
r
 
c
o
n
s
e
n
s
u
s
)
.
 
T
h
a
t
 
c
o
o
r
d
i
n
a
t
i
o
n
 
=
 
e
x
t
r
a
 
r
o
u
n
d
 
t
r
i
p
s
 
a
n
d
 
a
 
h
a
r
d
 
d
e
p
e
n
d
e
n
c
y
 
o
n
 
a
 
m
a
j
o
r
i
t
y
 
b
e
i
n
g
 
r
e
a
c
h
a
b
l
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
l
o
g
s
 
m
o
r
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
e
n
c
r
y
p
t
s
 
d
a
t
a
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
S
t
r
o
n
g
 
c
o
n
s
i
s
t
e
n
c
y
 
r
e
q
u
i
r
e
s
 
n
o
d
e
s
 
t
o
 
a
g
r
e
e
 
b
e
f
o
r
e
 
r
e
s
p
o
n
d
i
n
g
.
 
C
o
o
r
d
i
n
a
t
i
o
n
 
i
s
 
a
 
l
a
t
e
n
c
y
 
t
a
x
 
(
e
x
t
r
a
 
h
o
p
s
)
 
a
n
d
 
a
n
 
a
v
a
i
l
a
b
i
l
i
t
y
 
t
a
x
 
(
d
u
r
i
n
g
 
a
 
p
a
r
t
i
t
i
o
n
,
 
t
h
e
 
m
i
n
o
r
i
t
y
 
s
i
d
e
 
c
a
n
'
t
 
c
o
o
r
d
i
n
a
t
e
,
 
s
o
 
i
t
 
e
r
r
o
r
s
 
o
u
t
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
W
h
i
c
h
 
s
c
e
n
a
r
i
o
 
i
s
 
m
o
s
t
 
a
p
p
r
o
p
r
i
a
t
e
 
f
o
r
 
E
V
E
N
T
U
A
L
 
c
o
n
s
i
s
t
e
n
c
y
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
B
a
n
k
 
b
a
l
a
n
c
e
 
d
i
s
p
l
a
y
"
,


 
 
 
 
 
 
 
 
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
d
 
l
o
c
k
 
a
c
q
u
i
s
i
t
i
o
n
"
,


 
 
 
 
 
 
 
 
"
L
i
k
e
-
c
o
u
n
t
 
c
o
u
n
t
e
r
 
o
n
 
a
 
v
i
r
a
l
 
p
o
s
t
"
,


 
 
 
 
 
 
 
 
"
I
n
v
e
n
t
o
r
y
 
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
 
t
h
e
 
l
a
s
t
 
u
n
i
t
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
 
2
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
L
i
k
e
-
c
o
u
n
t
s
 
b
e
i
n
g
 
o
f
f
 
b
y
 
a
 
f
e
w
 
f
o
r
 
a
 
f
e
w
 
s
e
c
o
n
d
s
 
i
s
 
i
n
v
i
s
i
b
l
e
 
t
o
 
u
s
e
r
s
 
a
n
d
 
t
h
e
 
c
h
e
a
p
e
s
t
 
m
o
d
e
l
 
l
e
t
s
 
t
h
e
 
c
o
u
n
t
e
r
 
s
c
a
l
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
h
r
e
e
 
a
r
e
 
c
o
r
r
e
c
t
n
e
s
s
-
c
r
i
t
i
c
a
l
 
a
n
d
 
n
e
e
d
 
s
t
r
i
c
t
e
r
 
g
u
a
r
a
n
t
e
e
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
M
o
n
o
t
o
n
i
c
 
R
e
a
d
s
 
g
u
a
r
a
n
t
e
e
s
 
w
h
a
t
,
 
e
x
a
c
t
l
y
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
A
l
l
 
r
e
p
l
i
c
a
s
 
h
a
v
e
 
t
h
e
 
s
a
m
e
 
d
a
t
a
.
"
,


 
 
 
 
 
 
 
 
"
O
n
c
e
 
y
o
u
'
v
e
 
s
e
e
n
 
v
e
r
s
i
o
n
 
v
,
 
n
o
 
l
a
t
e
r
 
r
e
a
d
 
b
y
 
y
o
u
 
r
e
t
u
r
n
s
 
a
 
v
e
r
s
i
o
n
 
o
l
d
e
r
 
t
h
a
n
 
v
 
—
 
e
v
e
n
 
w
h
e
n
 
r
e
a
d
s
 
a
r
e
 
r
o
u
t
e
d
 
t
o
 
d
i
f
f
e
r
e
n
t
 
r
e
p
l
i
c
a
s
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
s
 
a
r
e
 
a
t
o
m
i
c
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
s
 
a
r
e
 
l
i
n
e
a
r
i
z
a
b
l
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
M
o
n
o
t
o
n
i
c
 
R
e
a
d
s
 
i
s
 
p
e
r
-
u
s
e
r
 
t
i
m
e
-
d
i
r
e
c
t
i
o
n
.
 
S
t
i
c
k
y
-
r
o
u
t
e
 
t
h
e
 
s
a
m
e
 
u
s
e
r
 
t
o
 
t
h
e
 
s
a
m
e
 
r
e
p
l
i
c
a
 
(
o
r
 
a
l
w
a
y
s
 
a
t
-
o
r
-
a
b
o
v
e
 
t
h
e
i
r
 
l
a
s
t
-
s
e
e
n
 
v
e
r
s
i
o
n
)
 
a
n
d
 
t
h
e
 
u
s
e
r
 
n
e
v
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
 
f
e
e
d
 
t
i
m
e
-
t
r
a
v
e
l
 
b
a
c
k
w
a
r
d
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
T
h
e
 
C
o
n
s
i
s
t
e
n
c
y
 
S
p
e
c
t
r
u
m
"


 
 
 
 
 
 
l
e
v
e
l
=
{
3
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
h
o
w
 
s
t
r
o
n
g
 
d
o
e
s
 
t
h
i
s
 
n
e
e
d
 
t
o
 
b
e
'
 
q
u
e
s
t
i
o
n
 
f
o
r
 
a
n
y
 
r
e
p
l
i
c
a
t
e
d
 
r
e
a
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


