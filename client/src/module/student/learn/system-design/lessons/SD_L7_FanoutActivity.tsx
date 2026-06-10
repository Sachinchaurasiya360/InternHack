
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
 
M
e
g
a
p
h
o
n
e
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
n
d
 
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
 
S
T
R
A
T
E
G
I
E
S
 
=
 
[


 
 
{


 
 
 
 
n
a
m
e
:
 
"
F
a
n
-
o
u
t
 
o
n
 
W
r
i
t
e
 
(
P
u
s
h
)
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


 
 
 
 
t
a
g
l
i
n
e
:
 
"
c
o
m
p
u
t
e
 
t
h
e
 
t
i
m
e
l
i
n
e
 
a
t
 
w
r
i
t
e
 
t
i
m
e
"
,


 
 
 
 
h
o
w
:
 
"
W
h
e
n
 
a
 
u
s
e
r
 
p
o
s
t
s
,
 
c
o
p
y
 
t
h
e
 
p
o
s
t
 
i
n
t
o
 
e
v
e
r
y
 
f
o
l
l
o
w
e
r
'
s
 
p
r
e
-
b
u
i
l
t
 
t
i
m
e
l
i
n
e
.
 
R
e
a
d
s
 
=
 
s
i
m
p
l
e
 
k
e
y
 
l
o
o
k
u
p
.
"
,


 
 
 
 
p
r
o
:
 
"
O
(
1
)
 
r
e
a
d
 
l
a
t
e
n
c
y
.
 
P
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
 
f
e
e
d
s
 
l
o
a
d
 
i
n
s
t
a
n
t
l
y
.
"
,


 
 
 
 
c
o
n
:
 
"
A
 
1
0
0
M
-
f
o
l
l
o
w
e
r
 
c
e
l
e
b
r
i
t
y
 
p
o
s
t
 
t
r
i
g
g
e
r
s
 
1
0
0
M
 
w
r
i
t
e
s
.
 
S
t
o
r
a
g
e
 
b
l
o
a
t
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
 
f
o
r
 
n
o
r
m
a
l
 
u
s
e
r
s
 
(
p
u
s
h
)
,
 
I
n
s
t
a
g
r
a
m
 
f
e
e
d
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
F
a
n
-
o
u
t
 
o
n
 
R
e
a
d
 
(
P
u
l
l
)
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


 
 
 
 
t
a
g
l
i
n
e
:
 
"
c
o
m
p
u
t
e
 
t
h
e
 
t
i
m
e
l
i
n
e
 
a
t
 
r
e
a
d
 
t
i
m
e
"
,


 
 
 
 
h
o
w
:
 
"
D
o
n
'
t
 
c
o
p
y
 
o
n
 
w
r
i
t
e
.
 
W
h
e
n
 
a
 
u
s
e
r
 
o
p
e
n
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
,
 
f
e
t
c
h
 
p
o
s
t
s
 
f
r
o
m
 
e
a
c
h
 
f
o
l
l
o
w
e
e
,
 
m
e
r
g
e
,
 
s
o
r
t
.
"
,


 
 
 
 
p
r
o
:
 
"
C
h
e
a
p
 
w
r
i
t
e
s
.
 
N
o
 
s
t
o
r
a
g
e
 
e
x
p
l
o
s
i
o
n
.
 
C
e
l
e
b
r
i
t
y
 
p
o
s
t
s
 
a
r
e
 
f
r
e
e
.
"
,


 
 
 
 
c
o
n
:
 
"
S
l
o
w
 
r
e
a
d
s
 
(
e
v
e
r
y
 
f
e
e
d
 
o
p
e
n
 
d
o
e
s
 
1
0
0
0
+
 
q
u
e
r
i
e
s
)
.
 
P
a
i
n
f
u
l
 
a
t
 
s
c
a
l
e
.
"
,


 
 
 
 
e
x
:
 
"
M
a
s
t
o
d
o
n
,
 
s
m
a
l
l
e
r
 
s
o
c
i
a
l
 
a
p
p
s
,
 
R
S
S
 
r
e
a
d
e
r
s
.
"
,


 
 
}
,


 
 
{


 
 
 
 
n
a
m
e
:
 
"
H
y
b
r
i
d
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


 
 
 
 
t
a
g
l
i
n
e
:
 
"
p
u
s
h
 
f
o
r
 
n
o
r
m
a
l
 
u
s
e
r
s
,
 
p
u
l
l
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
"
,


 
 
 
 
h
o
w
:
 
"
D
e
f
a
u
l
t
 
t
o
 
p
u
s
h
.
 
F
o
r
 
u
s
e
r
s
 
w
i
t
h
 
>
 
1
M
 
f
o
l
l
o
w
e
r
s
,
 
s
w
i
t
c
h
 
t
o
 
p
u
l
l
 
—
 
o
n
l
y
 
t
h
e
i
r
 
f
o
l
l
o
w
e
r
s
'
 
r
e
a
d
 
p
a
t
h
s
 
r
e
a
c
h
 
f
o
r
 
t
h
e
m
.
"
,


 
 
 
 
p
r
o
:
 
"
F
a
s
t
 
f
o
r
 
t
h
e
 
c
o
m
m
o
n
 
c
a
s
e
.
 
B
o
u
n
d
e
d
 
w
r
i
t
e
 
a
m
p
l
i
f
i
c
a
t
i
o
n
.
"
,


 
 
 
 
c
o
n
:
 
"
M
o
r
e
 
c
o
m
p
l
e
x
.
 
T
w
o
 
c
o
d
e
 
p
a
t
h
s
 
t
o
 
m
a
i
n
t
a
i
n
.
 
T
h
r
e
s
h
o
l
d
 
t
u
n
i
n
g
 
r
e
q
u
i
r
e
d
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
 
a
t
 
s
c
a
l
e
,
 
F
a
c
e
b
o
o
k
 
N
e
w
s
 
F
e
e
d
,
 
I
n
s
t
a
g
r
a
m
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
O
n
e
 
p
o
s
t
.
 
A
 
m
i
l
l
i
o
n
 
i
n
b
o
x
e
s
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


 
 
 
 
 
 
 
 
N
o
t
i
f
i
c
a
t
i
o
n
s
,
 
s
o
c
i
a
l
 
f
e
e
d
s
,
 
a
n
d
 
c
h
a
t
 
b
r
o
a
d
c
a
s
t
s
 
a
l
l
 
f
a
c
e
 
t
h
e
 
s
a
m
e
 
p
r
o
b
l
e
m
:
 
t
u
r
n
i
n
g
 
o
n
e


 
 
 
 
 
 
 
 
p
u
b
l
i
s
h
 
i
n
t
o
 
m
a
n
y
 
d
e
l
i
v
e
r
i
e
s
.
 
T
h
e
 
n
a
i
v
e
 
a
n
s
w
e
r
 
(
c
o
p
y
 
t
o
 
e
v
e
r
y
 
r
e
c
i
p
i
e
n
t
)
 
b
r
e
a
k
s
 
w
h
e
n
 
o
n
e


 
 
 
 
 
 
 
 
r
e
c
i
p
i
e
n
t
 
h
a
s
 
t
e
n
s
 
o
f
 
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
 
f
o
l
l
o
w
e
r
s
.
 
T
h
r
e
e
 
s
t
r
a
t
e
g
i
e
s
 
d
o
m
i
n
a
t
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
3
 
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
S
T
R
A
T
E
G
I
E
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
n
a
m
e
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
s
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
 
7
0
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
t
a
g
l
i
n
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
s
.
h
o
w
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
 
6
 
}
}
>
P
R
O
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
p
r
o
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
 
W
A
R
N
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
R
i
g
h
t
:
 
6
 
}
}
>
C
O
N
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
.
c
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
 
s
.
c
o
l
o
r
,
 
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
 
6
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
s
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
s
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


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
<
b
>
T
w
i
t
t
e
r
<
/
b
>
 
o
r
i
g
i
n
a
l
l
y
 
p
u
r
e
-
p
u
s
h
,
 
h
i
t
 
t
h
e
 
c
e
l
e
b
r
i
t
y
 
p
r
o
b
l
e
m
 
(
L
a
d
y
 
G
a
g
a
 
/
 
J
u
s
t
i
n


 
 
 
 
 
 
 
 
 
 
B
i
e
b
e
r
 
p
o
s
t
s
 
o
v
e
r
w
h
e
l
m
e
d
 
t
h
e
 
f
a
n
-
o
u
t
 
s
e
r
v
i
c
e
)
,
 
s
w
i
t
c
h
e
d
 
t
o
 
h
y
b
r
i
d
.
 
<
b
>
F
a
c
e
b
o
o
k
 
N
e
w
s


 
 
 
 
 
 
 
 
 
 
F
e
e
d
<
/
b
>
 
u
s
e
s
 
a
 
s
i
m
i
l
a
r
 
h
y
b
r
i
d
 
+
 
M
L
 
r
a
n
k
i
n
g
.
 
<
b
>
W
h
a
t
s
A
p
p
 
g
r
o
u
p
 
m
e
s
s
a
g
e
s
<
/
b
>
 
p
u
s
h
 
t
o


 
 
 
 
 
 
 
 
 
 
e
v
e
r
y
 
d
e
v
i
c
e
.
 
<
b
>
F
C
M
 
/
 
A
P
N
s
 
/
 
S
N
S
<
/
b
>
 
a
r
e
 
t
h
e
 
u
n
d
e
r
l
y
i
n
g
 
d
e
l
i
v
e
r
y
 
l
a
y
e
r
s
;
 
t
h
e
 
s
t
r
a
t
e
g
y


 
 
 
 
 
 
 
 
 
 
i
s
 
w
h
a
t
 
y
o
u
r
 
s
e
r
v
i
c
e
 
d
o
e
s
 
o
n
 
t
o
p
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
 
A
n
i
m
a
t
e
d
 
c
e
l
e
b
r
i
t
y
-
f
a
n
o
u
t
 
p
r
o
b
l
e
m
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
u
s
h
"
 
|
 
"
p
u
l
l
"
 
|
 
"
h
y
b
r
i
d
"
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
a
n
o
u
t
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
u
s
h
"
)
;


 
 
c
o
n
s
t
 
[
f
o
l
l
o
w
e
r
s
,
 
s
e
t
F
o
l
l
o
w
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
(
1
0
0
)
;


 
 
c
o
n
s
t
 
[
p
o
s
t
S
e
n
t
,
 
s
e
t
P
o
s
t
S
e
n
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
f
a
l
s
e
)
;




 
 
/
/
 
S
t
a
t
s
 
p
e
r
 
m
o
d
e


 
 
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
 
m
o
d
e
 
=
=
=
 
"
p
u
s
h
"
 
?
 
f
o
l
l
o
w
e
r
s
 
:
 
m
o
d
e
 
=
=
=
 
"
h
y
b
r
i
d
"
 
&
&
 
f
o
l
l
o
w
e
r
s
 
>
 
1
0
0
_
0
0
0
 
?
 
0
 
:
 
f
o
l
l
o
w
e
r
s
;


 
 
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
E
x
t
r
a
 
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
u
l
l
"
 
?
 
1
 
:
 
m
o
d
e
 
=
=
=
 
"
h
y
b
r
i
d
"
 
&
&
 
f
o
l
l
o
w
e
r
s
 
>
 
1
0
0
_
0
0
0
 
?
 
1
 
:
 
0
;


 
 
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
A
m
p
 
=
 
w
r
i
t
e
s
;


 
 
c
o
n
s
t
 
r
e
a
d
A
m
p
 
=
 
r
e
a
d
s
E
x
t
r
a
;




 
 
/
/
 
V
i
s
u
a
l
 
r
e
p
r
e
s
e
n
t
a
t
i
o
n
:
 
s
h
o
w
 
o
n
l
y
 
u
p
 
t
o
 
~
5
0
 
f
o
l
l
o
w
e
r
 
n
o
d
e
s


 
 
c
o
n
s
t
 
S
H
O
W
N
 
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
f
o
l
l
o
w
e
r
s
,
 
5
0
)
;


 
 
c
o
n
s
t
 
s
h
o
w
C
e
l
e
b
r
i
t
y
 
=
 
f
o
l
l
o
w
e
r
s
 
>
 
1
0
0
_
0
0
0
;




 
 
c
o
n
s
t
 
s
e
n
d
P
o
s
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
P
o
s
t
S
e
n
t
(
t
r
u
e
)
;


 
 
 
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
s
e
t
P
o
s
t
S
e
n
t
(
f
a
l
s
e
)
,
 
2
2
0
0
)
;


 
 
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
 
t
h
e
 
f
o
l
l
o
w
e
r
 
c
o
u
n
t
.
 
W
a
t
c
h
 
t
h
e
 
w
r
i
t
e
s
 
e
x
p
l
o
d
e
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


 
 
 
 
 
 
 
 
Y
o
u
 
p
o
s
t
 
o
n
c
e
.
 
T
h
e
 
s
y
s
t
e
m
 
h
a
s
 
t
o
 
d
e
l
i
v
e
r
 
t
o
 
N
 
f
o
l
l
o
w
e
r
s
.
 
T
r
y
 
a
 
n
o
r
m
a
l
 
u
s
e
r


 
 
 
 
 
 
 
 
(
1
0
0
 
f
o
l
l
o
w
e
r
s
)
,
 
a
n
 
i
n
f
l
u
e
n
c
e
r
 
(
5
0
k
)
,
 
a
n
d
 
a
 
c
e
l
e
b
r
i
t
y
 
(
5
M
)
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
 
s
t
r
a
t
e
g
i
e
s
 
h
a
n
d
l
e


 
 
 
 
 
 
 
 
t
h
e
m
 
v
e
r
y
 
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
y
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
u
s
h
"
,
 
"
p
u
l
l
"
,
 
"
h
y
b
r
i
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
u
s
h
"
 
?
 
S
D
 
:
 
m
 
=
=
=
 
"
p
u
l
l
"
 
?
 
P
U
R
P
L
E
 
:
 
W
A
R
N
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
6
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
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
f
o
l
l
o
w
e
r
 
c
o
u
n
t
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
 
s
h
o
w
C
e
l
e
b
r
i
t
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
}
>


 
 
 
 
 
 
 
 
 
 
 
 
=
 
{
f
o
l
l
o
w
e
r
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
 
{
s
h
o
w
C
e
l
e
b
r
i
t
y
 
?
 
"
🌟
 
c
e
l
e
b
r
i
t
y
"
 
:
 
"
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
}


 
 
 
 
 
 
 
 
 
 
m
a
x
=
{
6
}


 
 
 
 
 
 
 
 
 
 
s
t
e
p
=
{
1
}


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
[
1
0
0
,
 
1
0
0
0
,
 
1
0
0
0
0
,
 
1
0
0
0
0
0
,
 
1
0
0
0
0
0
0
,
 
5
0
0
0
0
0
0
,
 
5
0
0
0
0
0
0
0
]
.
i
n
d
e
x
O
f
(
f
o
l
l
o
w
e
r
s
)
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
F
o
l
l
o
w
e
r
s
(
[
1
0
0
,
 
1
0
0
0
,
 
1
0
0
0
0
,
 
1
0
0
0
0
0
,
 
1
0
0
0
0
0
0
,
 
5
0
0
0
0
0
0
,
 
5
0
0
0
0
0
0
0
]
[
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
]
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
 
s
h
o
w
C
e
l
e
b
r
i
t
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
}


 
 
 
 
 
 
 
 
/
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
1
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
s
p
a
n
>
1
k
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
1
0
k
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
1
0
0
k
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
1
M
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
5
M
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
5
0
M
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


 
 
 
 
 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
7
2
0
 
3
2
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
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
x
W
i
d
t
h
:
 
7
6
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
b
l
o
c
k
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
 
a
u
t
o
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
A
u
t
h
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
g
 
t
r
a
n
s
f
o
r
m
=
"
t
r
a
n
s
l
a
t
e
(
4
0
,
 
1
3
0
)
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
c
i
r
c
l
e
 
r
=
{
3
2
}
 
f
i
l
l
=
{
`
$
{
S
D
}
2
2
`
}
 
s
t
r
o
k
e
=
{
S
D
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
2
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
:
 
p
o
s
t
S
e
n
t
 
?
 
[
1
,
 
1
.
1
5
,
 
1
]
 
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
6
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
0
}
 
y
=
{
-
5
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
S
D
}
 
f
o
n
t
S
i
z
e
=
{
1
1
}
 
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
=
{
8
0
0
}
 
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
=
{
M
O
N
O
}
>
Y
O
U
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
0
}
 
y
=
{
1
0
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
N
E
U
T
R
A
L
}
 
f
o
n
t
S
i
z
e
=
{
9
}
 
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
=
{
M
O
N
O
}
>
{
f
o
l
l
o
w
e
r
s
 
>
=
 
1
0
0
0
0
0
 
?
 
"
c
e
l
e
b
r
i
t
y
"
 
:
 
"
u
s
e
r
"
}
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
F
o
l
l
o
w
e
r
s
 
i
n
 
a
 
r
i
n
g
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
S
H
O
W
N
 
}
)
.
m
a
p
(
(
_
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
n
g
l
e
 
=
 
(
i
 
/
 
S
H
O
W
N
)
 
*
 
2
 
*
 
M
a
t
h
.
P
I
 
-
 
M
a
t
h
.
P
I
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
x
 
=
 
4
6
0
 
+
 
M
a
t
h
.
c
o
s
(
a
n
g
l
e
)
 
*
 
1
4
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
y
 
=
 
1
6
0
 
+
 
M
a
t
h
.
s
i
n
(
a
n
g
l
e
)
 
*
 
1
1
0
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
u
s
h
:
 
l
i
n
e
s
 
f
r
o
m
 
a
u
t
h
o
r
 
t
o
 
f
o
l
l
o
w
e
r
 
w
i
t
h
 
p
a
c
k
e
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
u
s
h
"
 
|
|
 
(
m
o
d
e
 
=
=
=
 
"
h
y
b
r
i
d
"
 
&
&
 
f
o
l
l
o
w
e
r
s
 
<
=
 
1
0
0
0
0
0
)
)
 
&
&
 
p
o
s
t
S
e
n
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
7
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
1
3
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
c
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
c
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
S
D
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
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
3
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
7
2
,
 
c
y
:
 
1
3
0
,
 
o
p
a
c
i
t
y
:
 
1
 
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
 
c
x
,
 
c
y
,
 
o
p
a
c
i
t
y
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
 
1
,
 
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
1
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
i
r
c
l
e
 
c
x
=
{
c
x
}
 
c
y
=
{
c
y
}
 
r
=
{
5
}
 
f
i
l
l
=
{
N
E
U
T
R
A
L
}
 
s
t
r
o
k
e
=
"
#
0
b
1
2
2
0
"
 
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
1
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
I
f
 
f
o
l
l
o
w
e
r
s
 
>
 
5
0
,
 
s
h
o
w
 
"
+
N
 
m
o
r
e
"
 
i
n
d
i
c
a
t
o
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
f
o
l
l
o
w
e
r
s
 
>
 
S
H
O
W
N
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
4
6
0
}
 
y
=
{
3
0
0
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
{
N
E
U
T
R
A
L
}
 
f
o
n
t
S
i
z
e
=
{
1
1
}
 
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
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
+
 
{
(
f
o
l
l
o
w
e
r
s
 
-
 
S
H
O
W
N
)
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
 
m
o
r
e
 
f
o
l
l
o
w
e
r
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
u
l
l
 
s
t
r
a
t
e
g
y
:
 
t
i
m
e
l
i
n
e
-
b
u
i
l
d
 
a
r
r
o
w
 
g
o
e
s
 
b
a
c
k
 
f
r
o
m
 
o
n
e
 
u
s
e
r
 
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
p
u
l
l
"
 
&
&
 
p
o
s
t
S
e
n
t
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
l
i
n
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
0
.
4
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
1
=
{
4
6
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
1
=
{
5
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
7
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
y
2
=
{
1
3
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
P
U
R
P
L
E
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
1
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
"
3
 
4
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
P
U
R
P
L
E
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
 
c
x
:
 
4
6
0
,
 
c
y
:
 
5
0
,
 
o
p
a
c
i
t
y
:
 
1
 
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
 
c
x
:
 
7
2
,
 
c
y
:
 
1
3
0
,
 
o
p
a
c
i
t
y
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
8
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
2
6
0
}
 
y
=
{
6
0
}
 
f
i
l
l
=
{
P
U
R
P
L
E
}
 
f
o
n
t
S
i
z
e
=
{
1
0
}
 
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
=
{
M
O
N
O
}
 
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
=
{
7
0
0
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
a
d
 
p
u
l
l
s
 
p
o
s
t
s
 
f
r
o
m
 
a
u
t
h
o
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
s
v
g
>




 
 
 
 
 
 
 
 
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
w
r
i
t
e
s
 
p
e
r
 
p
o
s
t
"
 
v
a
l
u
e
=
{
w
r
i
t
e
A
m
p
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
 
c
o
l
o
r
=
{
w
r
i
t
e
A
m
p
 
>
 
1
_
0
0
0
_
0
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
e
x
t
r
a
 
r
e
a
d
s
 
/
 
f
e
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
r
e
a
d
A
m
p
)
}
 
c
o
l
o
r
=
{
r
e
a
d
A
m
p
 
>
 
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
s
t
o
r
a
g
e
 
g
r
o
w
t
h
"
 
v
a
l
u
e
=
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
u
s
h
"
 
?
 
"
h
i
g
h
"
 
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
u
l
l
"
 
?
 
"
n
o
n
e
"
 
:
 
"
m
o
d
e
r
a
t
e
"
}
 
c
o
l
o
r
=
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
u
s
h
"
 
?
 
W
A
R
N
 
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
u
l
l
"
 
?
 
S
D
 
:
 
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
s
e
n
d
P
o
s
t
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
p
o
s
t
S
e
n
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
S
D
,
 
p
o
s
t
S
e
n
t
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
S
e
n
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


 
 
 
 
 
 
 
 
 
 
 
 
{
p
o
s
t
S
e
n
t
 
?
 
"
d
e
l
i
v
e
r
i
n
g
…
"
 
:
 
"
p
o
s
t
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
(
)
 
=
>
 
s
e
t
P
o
s
t
S
e
n
t
(
f
a
l
s
e
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
`
$
{
m
o
d
e
}
-
$
{
s
h
o
w
C
e
l
e
b
r
i
t
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
N
A
L
Y
S
I
S


 
 
 
 
 
 
 
 
 
 
 
 
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
u
s
h
"
 
&
&
 
!
s
h
o
w
C
e
l
e
b
r
i
t
y
 
&
&
 
`
P
u
s
h
 
w
o
r
k
s
 
f
i
n
e
 
h
e
r
e
 
—
 
$
{
f
o
l
l
o
w
e
r
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
 
w
r
i
t
e
s
 
i
s
 
c
h
e
a
p
.
 
R
e
a
d
s
 
a
r
e
 
O
(
1
)
.
`
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
p
u
s
h
"
 
&
&
 
s
h
o
w
C
e
l
e
b
r
i
t
y
 
&
&
 
`
P
u
s
h
 
f
a
l
l
s
 
a
p
a
r
t
.
 
$
{
f
o
l
l
o
w
e
r
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
 
w
r
i
t
e
s
 
f
o
r
 
O
N
E
 
p
o
s
t
 
w
i
l
l
 
s
a
t
u
r
a
t
e
 
t
h
e
 
f
a
n
-
o
u
t
 
s
e
r
v
i
c
e
 
f
o
r
 
m
i
n
u
t
e
s
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
 
c
e
l
e
b
r
i
t
y
 
p
r
o
b
l
e
m
.
`
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
p
u
l
l
"
 
&
&
 
`
P
u
l
l
 
d
o
e
s
 
Z
E
R
O
 
w
r
i
t
e
s
.
 
R
e
a
d
s
 
a
r
e
 
s
l
o
w
 
b
e
c
a
u
s
e
 
e
v
e
r
y
 
f
e
e
d
 
o
p
e
n
 
q
u
e
r
i
e
s
 
e
v
e
r
y
 
f
o
l
l
o
w
e
e
 
—
 
f
i
n
e
 
f
o
r
 
$
{
f
o
l
l
o
w
e
r
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
 
f
o
l
l
o
w
e
e
s
 
i
f
 
t
h
e
 
u
s
e
r
 
h
a
s
 
f
e
w
;
 
b
r
u
t
a
l
 
a
t
 
s
c
a
l
e
.
`
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
h
y
b
r
i
d
"
 
&
&
 
!
s
h
o
w
C
e
l
e
b
r
i
t
y
 
&
&
 
`
B
e
l
o
w
 
t
h
e
 
t
h
r
e
s
h
o
l
d
,
 
h
y
b
r
i
d
 
a
c
t
s
 
l
i
k
e
 
p
u
s
h
.
 
$
{
f
o
l
l
o
w
e
r
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
 
w
r
i
t
e
s
 
—
 
f
a
s
t
 
r
e
a
d
s
,
 
m
a
n
a
g
e
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
`
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
h
y
b
r
i
d
"
 
&
&
 
s
h
o
w
C
e
l
e
b
r
i
t
y
 
&
&
 
`
A
b
o
v
e
 
t
h
e
 
t
h
r
e
s
h
o
l
d
,
 
h
y
b
r
i
d
 
a
c
t
s
 
l
i
k
e
 
p
u
l
l
.
 
Z
e
r
o
 
f
a
n
-
o
u
t
 
w
r
i
t
e
s
 
f
o
r
 
t
h
e
 
c
e
l
e
b
r
i
t
y
 
p
o
s
t
.
 
F
o
l
l
o
w
e
r
s
'
 
r
e
a
d
s
 
m
e
r
g
e
 
c
e
l
e
b
r
i
t
y
 
p
o
s
t
s
 
a
t
 
r
e
a
d
 
t
i
m
e
.
`
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
 
R
e
a
l
-
w
o
r
l
d
 
p
l
a
t
f
o
r
m
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
L
A
T
F
O
R
M
S
 
=
 
[


 
 
{
 
n
a
m
e
:
 
"
T
w
i
t
t
e
r
"
,
 
s
t
r
a
t
e
g
y
:
 
"
H
y
b
r
i
d
"
,
 
n
o
t
e
:
 
"
P
u
s
h
 
f
o
r
 
u
s
e
r
s
 
w
i
t
h
 
<
 
1
M
 
f
o
l
l
o
w
e
r
s
;
 
p
u
l
l
 
a
t
 
t
h
e
 
r
e
a
d
-
m
e
r
g
e
 
s
t
e
p
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
.
 
D
o
c
u
m
e
n
t
e
d
 
i
n
 
t
h
e
i
r
 
c
l
a
s
s
i
c
 
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
 
b
l
o
g
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
F
a
c
e
b
o
o
k
 
N
e
w
s
 
F
e
e
d
"
,
 
s
t
r
a
t
e
g
y
:
 
"
H
y
b
r
i
d
 
+
 
M
L
"
,
 
n
o
t
e
:
 
"
P
u
l
l
 
c
a
n
d
i
d
a
t
e
 
p
o
s
t
s
 
a
t
 
r
e
a
d
 
t
i
m
e
,
 
r
u
n
 
M
L
 
r
a
n
k
i
n
g
.
 
H
i
g
h
l
y
 
p
e
r
s
o
n
a
l
i
z
e
d
,
 
c
o
m
p
l
e
x
.
 
R
i
c
h
-
c
o
n
t
e
n
t
 
f
e
e
d
s
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
I
n
s
t
a
g
r
a
m
"
,
 
s
t
r
a
t
e
g
y
:
 
"
P
u
s
h
 
(
m
o
s
t
l
y
)
"
,
 
n
o
t
e
:
 
"
P
u
s
h
 
t
h
e
 
f
u
l
l
 
t
i
m
e
l
i
n
e
;
 
f
o
r
 
v
e
r
y
-
v
i
r
a
l
 
c
o
n
t
e
n
t
,
 
s
u
p
p
l
e
m
e
n
t
 
a
t
 
r
e
a
d
 
t
i
m
e
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
W
h
a
t
s
A
p
p
 
g
r
o
u
p
s
"
,
 
s
t
r
a
t
e
g
y
:
 
"
P
u
s
h
 
t
o
 
d
e
v
i
c
e
s
"
,
 
n
o
t
e
:
 
"
E
a
c
h
 
m
e
m
b
e
r
'
s
 
d
e
v
i
c
e
 
i
s
 
a
 
r
e
c
i
p
i
e
n
t
.
 
G
r
o
u
p
 
s
i
z
e
 
c
a
p
 
(
~
1
0
0
0
)
 
k
e
e
p
s
 
f
a
n
-
o
u
t
 
b
o
u
n
d
e
d
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
S
l
a
c
k
"
,
 
s
t
r
a
t
e
g
y
:
 
"
P
u
s
h
 
v
i
a
 
W
e
b
S
o
c
k
e
t
"
,
 
n
o
t
e
:
 
"
C
h
a
n
n
e
l
 
m
e
m
b
e
r
s
 
p
u
s
h
e
d
 
i
n
 
r
e
a
l
 
t
i
m
e
 
v
i
a
 
p
e
r
s
i
s
t
e
n
t
 
W
S
.
 
C
h
a
n
n
e
l
 
s
i
z
e
 
p
r
a
c
t
i
c
a
l
l
y
 
c
a
p
p
e
d
 
b
y
 
l
a
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
m
e
n
t
s
.
"
 
}
,


 
 
{
 
n
a
m
e
:
 
"
E
m
a
i
l
 
n
e
w
s
l
e
t
t
e
r
s
"
,
 
s
t
r
a
t
e
g
y
:
 
"
P
u
s
h
 
(
q
u
e
u
e
)
"
,
 
n
o
t
e
:
 
"
1
M
-
r
e
c
i
p
i
e
n
t
 
b
l
a
s
t
 
g
o
e
s
 
t
h
r
o
u
g
h
 
a
 
q
u
e
u
e
.
 
W
o
r
k
e
r
s
 
c
h
e
w
 
t
h
r
o
u
g
h
 
i
t
 
o
v
e
r
 
m
i
n
u
t
e
s
/
h
o
u
r
s
,
 
n
o
t
 
r
e
a
l
-
t
i
m
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
l
a
t
f
o
r
m
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
W
h
a
t
 
r
e
a
l
 
p
l
a
t
f
o
r
m
s
 
d
o
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
r
a
t
e
g
y
 
d
e
p
e
n
d
s
 
o
n
 
r
e
a
l
-
t
i
m
e
-
n
e
s
s
,
 
f
o
l
l
o
w
e
r
 
d
i
s
t
r
i
b
u
t
i
o
n
,
 
a
n
d
 
p
e
r
s
o
n
a
l
i
z
a
t
i
o
n


 
 
 
 
 
 
 
 
c
o
m
p
l
e
x
i
t
y
.
 
S
i
x
 
p
l
a
t
f
o
r
m
s
 
w
i
t
h
 
t
h
e
i
r
 
a
c
t
u
a
l
 
a
p
p
r
o
a
c
h
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
L
A
T
F
O
R
M
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
n
a
m
e
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
 
g
a
p
:
 
1
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
n
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
,
 
w
h
i
t
e
S
p
a
c
e
:
 
"
n
o
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
s
t
r
a
t
e
g
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
n
o
t
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
7
_
F
a
n
o
u
t
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
C
e
l
e
b
r
i
t
y
 
P
r
o
b
l
e
m
"
,
 
i
c
o
n
:
 
<
M
e
g
a
p
h
o
n
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
F
a
n
o
u
t
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
l
a
t
f
o
r
m
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
l
a
t
f
o
r
m
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
W
h
y
 
d
o
e
s
 
p
u
r
e
 
f
a
n
-
o
u
t
-
o
n
-
w
r
i
t
e
 
b
r
e
a
k
 
f
o
r
 
c
e
l
e
b
r
i
t
y
 
u
s
e
r
s
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
 
t
o
o
 
m
u
c
h
 
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
"
,


 
 
 
 
 
 
 
 
"
O
n
e
 
c
e
l
e
b
r
i
t
y
 
p
o
s
t
 
=
 
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
 
t
i
m
e
l
i
n
e
 
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
 
f
a
n
-
o
u
t
 
s
e
r
v
i
c
e
 
b
a
c
k
s
 
u
p
;
 
t
h
e
i
r
 
f
o
l
l
o
w
e
r
s
 
d
o
n
'
t
 
s
e
e
 
t
h
e
 
p
o
s
t
 
f
o
r
 
m
i
n
u
t
e
s
.
"
,


 
 
 
 
 
 
 
 
"
W
r
i
t
e
s
 
a
r
e
 
s
l
o
w
e
r
.
"
,


 
 
 
 
 
 
 
 
"
R
e
a
d
s
 
f
a
i
l
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
1
0
0
M
 
f
o
l
l
o
w
e
r
 
×
 
1
 
p
o
s
t
 
=
 
1
0
0
M
 
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
 
p
u
s
h
 
p
i
p
e
l
i
n
e
 
b
e
c
o
m
e
s
 
t
h
e
 
b
o
t
t
l
e
n
e
c
k
.
 
H
y
b
r
i
d
 
a
v
o
i
d
s
 
t
h
i
s
 
b
y
 
N
O
T
 
p
r
e
-
f
a
n
n
i
n
g
-
o
u
t
 
f
o
r
 
c
e
l
e
b
r
i
t
i
e
s
 
—
 
t
h
e
i
r
 
p
o
s
t
s
 
a
r
e
 
m
e
r
g
e
d
 
a
t
 
r
e
a
d
 
t
i
m
e
 
i
n
s
t
e
a
d
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
P
u
l
l
 
s
t
r
a
t
e
g
y
 
h
a
s
 
a
 
f
a
t
a
l
 
w
e
a
k
n
e
s
s
 
f
o
r
 
a
c
t
i
v
e
 
u
s
e
r
s
 
w
i
t
h
 
5
,
0
0
0
 
f
o
l
l
o
w
e
e
s
.
 
W
h
a
t
 
i
s
 
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
S
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
E
v
e
r
y
 
f
e
e
d
-
o
p
e
n
 
q
u
e
r
i
e
s
 
5
,
0
0
0
 
s
o
u
r
c
e
s
 
a
n
d
 
m
e
r
g
e
s
.
 
S
l
o
w
,
 
e
x
p
e
n
s
i
v
e
,
 
a
n
d
 
g
e
t
s
 
w
o
r
s
e
 
o
v
e
r
 
t
i
m
e
.
"
,


 
 
 
 
 
 
 
 
"
I
t
 
u
s
e
s
 
t
o
o
 
m
u
c
h
 
d
i
s
k
.
"
,


 
 
 
 
 
 
 
 
"
R
a
n
d
o
m
 
f
a
i
l
u
r
e
s
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
l
l
 
p
u
s
h
e
s
 
t
h
e
 
c
o
s
t
 
t
o
 
r
e
a
d
 
t
i
m
e
,
 
w
h
i
c
h
 
i
s
 
t
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
 
p
a
t
h
.
 
W
i
t
h
 
m
a
n
y
 
f
o
l
l
o
w
e
e
s
,
 
t
h
e
 
m
e
r
g
e
 
b
e
c
o
m
e
s
 
p
r
o
h
i
b
i
t
i
v
e
.
 
P
u
s
h
 
i
s
 
m
u
c
h
 
b
e
t
t
e
r
 
h
e
r
e
 
—
 
p
r
e
-
b
u
i
l
t
 
t
i
m
e
l
i
n
e
s
 
a
r
e
 
O
(
1
)
 
t
o
 
r
e
a
d
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
A
 
'
h
y
b
r
i
d
'
 
s
t
r
a
t
e
g
y
 
c
o
m
m
o
n
l
y
 
s
w
i
t
c
h
e
s
 
t
o
 
p
u
l
l
 
a
b
o
v
e
 
w
h
a
t
 
t
h
r
e
s
h
o
l
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
1
,
0
0
0
 
f
o
l
l
o
w
e
r
s
.
"
,


 
 
 
 
 
 
 
 
"
O
f
t
e
n
 
a
r
o
u
n
d
 
1
M
 
f
o
l
l
o
w
e
r
s
 
—
 
a
n
y
t
h
i
n
g
 
a
b
o
v
e
 
i
s
 
t
r
e
a
t
e
d
 
a
s
 
a
 
c
e
l
e
b
r
i
t
y
,
 
p
u
l
l
-
m
e
r
g
e
d
 
a
t
 
r
e
a
d
 
t
i
m
e
.
"
,


 
 
 
 
 
 
 
 
"
A
l
w
a
y
s
 
p
u
l
l
.
"
,


 
 
 
 
 
 
 
 
"
N
e
v
e
r
 
p
u
l
l
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
i
t
t
e
r
'
s
 
d
o
c
u
m
e
n
t
e
d
 
t
h
r
e
s
h
o
l
d
 
h
a
s
 
h
i
s
t
o
r
i
c
a
l
l
y
 
b
e
e
n
 
a
r
o
u
n
d
 
1
M
.
 
T
h
e
 
e
x
a
c
t
 
n
u
m
b
e
r
 
i
s
 
t
u
n
a
b
l
e
;
 
t
h
e
 
p
a
t
t
e
r
n
 
i
s
 
'
m
o
s
t
 
u
s
e
r
s
 
p
u
s
h
,
 
t
o
p
 
f
e
w
 
p
e
r
c
e
n
t
 
p
u
l
l
'
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
a
t
s
A
p
p
 
g
r
o
u
p
 
m
e
s
s
a
g
e
s
:
 
1
0
0
0
 
m
e
m
b
e
r
s
.
 
B
e
s
t
 
f
i
t
 
f
o
r
 
d
e
l
i
v
e
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
P
u
l
l
 
—
 
e
a
c
h
 
m
e
m
b
e
r
 
f
e
t
c
h
e
s
 
w
h
e
n
 
t
h
e
y
 
o
p
e
n
 
t
h
e
 
c
h
a
t
.
"
,


 
 
 
 
 
 
 
 
"
P
u
s
h
 
—
 
f
a
n
 
o
u
t
 
t
o
 
e
v
e
r
y
 
m
e
m
b
e
r
'
s
 
d
e
v
i
c
e
 
q
u
e
u
e
 
a
n
d
 
n
o
t
i
f
y
 
v
i
a
 
A
P
N
s
/
F
C
M
.
 
G
r
o
u
p
-
s
i
z
e
 
c
a
p
 
(
~
1
0
0
0
)
 
b
o
u
n
d
s
 
t
h
e
 
f
a
n
-
o
u
t
.
"
,


 
 
 
 
 
 
 
 
"
H
y
b
r
i
d
.
"
,


 
 
 
 
 
 
 
 
"
D
o
e
s
n
'
t
 
m
a
t
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
R
e
a
l
-
t
i
m
e
 
c
h
a
t
 
n
e
e
d
s
 
p
u
s
h
 
n
o
t
i
f
i
c
a
t
i
o
n
s
.
 
G
r
o
u
p
-
s
i
z
e
 
l
i
m
i
t
 
c
a
p
s
 
t
h
e
 
f
a
n
-
o
u
t
 
a
t
 
a
 
m
a
n
a
g
e
a
b
l
e
 
n
u
m
b
e
r
.
 
E
v
e
n
 
a
n
 
a
c
t
i
v
e
 
1
0
0
0
-
m
e
m
b
e
r
 
g
r
o
u
p
 
s
e
n
d
s
 
m
a
y
b
e
 
1
0
0
-
1
0
0
0
 
m
e
s
s
a
g
e
s
/
d
a
y
,
 
s
o
 
1
0
0
k
-
1
M
 
p
u
s
h
 
d
e
l
i
v
e
r
i
e
s
 
—
 
h
a
n
d
l
e
d
 
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
y
 
t
h
e
 
d
e
v
i
c
e
-
q
u
e
u
e
 
f
l
e
e
t
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
N
o
t
i
f
i
c
a
t
i
o
n
 
F
a
n
-
o
u
t
"


 
 
 
 
 
 
l
e
v
e
l
=
{
7
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
'
 
/
 
'
d
e
s
i
g
n
 
n
o
t
i
f
i
c
a
t
i
o
n
s
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
 
a
n
s
w
e
r
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


