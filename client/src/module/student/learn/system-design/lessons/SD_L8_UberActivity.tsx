
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
 
C
a
r
,
 
G
l
o
b
e
,
 
M
a
p
P
i
n
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
 
r
i
d
e
r
 
r
e
q
u
e
s
t
s
 
t
r
i
p
,
 
s
y
s
t
e
m
 
f
i
n
d
s
 
n
e
a
r
e
s
t
 
d
r
i
v
e
r
,
 
b
o
t
h
 
t
r
a
c
k
 
e
a
c
h
 
o
t
h
e
r
 
l
i
v
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
 
d
i
s
p
a
t
c
h
 
l
a
t
e
n
c
y
 
p
9
9
 
<
 
5
s
,
 
l
o
c
a
t
i
o
n
 
u
p
d
a
t
e
s
 
e
v
e
r
y
 
4
s
,
 
s
c
a
l
e
 
t
o
 
1
0
M
 
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
 
u
s
e
r
s
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
 
p
a
y
m
e
n
t
s
,
 
s
u
r
g
e
 
p
r
i
c
i
n
g
,
 
r
a
t
i
n
g
s
,
 
f
r
a
u
d
 
(
e
a
c
h
 
i
s
 
a
 
m
u
l
t
i
-
l
e
s
s
o
n
 
t
o
p
i
c
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
1
0
M
 
a
c
t
i
v
e
 
d
r
i
v
e
r
s
 
+
 
r
i
d
e
r
s
.
 
4
s
 
l
o
c
a
t
i
o
n
 
p
i
n
g
s
 
→
 
2
.
5
M
 
l
o
c
a
t
i
o
n
 
u
p
d
a
t
e
s
/
s
e
c
 
a
t
 
p
e
a
k
.
"
,


 
 
 
 
 
 
"
1
M
 
t
r
i
p
s
/
d
a
y
 
→
 
~
1
2
 
t
r
i
p
s
/
s
e
c
 
a
v
e
r
a
g
e
,
 
p
e
a
k
 
~
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
P
e
r
-
t
r
i
p
 
e
v
e
n
t
s
:
 
5
0
+
 
(
r
e
q
u
e
s
t
,
 
m
a
t
c
h
,
 
a
c
c
e
p
t
,
 
e
n
-
r
o
u
t
e
,
 
a
r
r
i
v
e
d
,
 
s
t
a
r
t
e
d
,
 
e
n
d
e
d
,
 
p
a
i
d
,
 
r
a
t
e
d
…
)
.
"
,


 
 
 
 
 
 
"
G
e
o
 
d
a
t
a
:
 
H
3
 
c
e
l
l
s
 
a
t
 
r
e
s
o
l
u
t
i
o
n
 
9
 
(
~
1
5
0
m
 
h
e
x
a
g
o
n
s
)
 
—
 
2
2
0
M
 
c
e
l
l
s
 
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
t
r
i
p
-
r
e
q
u
e
s
t
 
{
 
l
a
t
,
 
l
n
g
 
}
 
·
 
W
S
 
/
d
r
i
v
e
r
-
s
t
r
e
a
m
 
·
 
P
O
S
T
 
/
a
c
c
e
p
t
-
t
r
i
p
 
·
 
P
O
S
T
 
/
l
o
c
a
t
i
o
n
-
p
i
n
g
"
,


 
 
 
 
 
 
"
d
r
i
v
e
r
s
(
i
d
,
 
l
o
c
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
)
 
—
 
l
i
v
e
 
s
t
a
t
e
 
i
n
 
R
e
d
i
s
 
k
e
y
e
d
 
b
y
 
H
3
 
c
e
l
l
"
,


 
 
 
 
 
 
"
t
r
i
p
s
(
i
d
,
 
r
i
d
e
r
,
 
d
r
i
v
e
r
,
 
s
t
a
t
e
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
 
f
o
r
 
d
u
r
a
b
l
e
 
t
r
i
p
 
l
i
f
e
c
y
c
l
e
"
,


 
 
 
 
 
 
"
e
v
e
n
t
s
 
s
t
r
e
a
m
 
(
K
a
f
k
a
)
 
—
 
e
v
e
r
y
 
s
t
a
t
e
 
c
h
a
n
g
e
 
f
o
r
 
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
 
s
e
r
v
i
c
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
D
r
i
v
e
r
 
a
p
p
 
→
 
l
o
c
a
t
i
o
n
-
s
t
r
e
a
m
 
→
 
R
e
d
i
s
 
s
h
a
r
d
e
d
 
b
y
 
H
3
 
c
e
l
l
.
"
,


 
 
 
 
 
 
"
R
i
d
e
r
 
r
e
q
u
e
s
t
 
→
 
d
i
s
p
a
t
c
h
 
s
e
r
v
i
c
e
 
→
 
q
u
e
r
y
 
n
e
a
r
b
y
 
c
e
l
l
s
 
→
 
s
c
o
r
e
 
+
 
o
f
f
e
r
 
t
o
 
d
r
i
v
e
r
 
v
i
a
 
p
u
s
h
.
"
,


 
 
 
 
 
 
"
T
r
i
p
 
l
i
f
e
c
y
c
l
e
 
i
n
 
P
o
s
t
g
r
e
s
 
w
i
t
h
 
e
v
e
n
t
s
 
t
o
 
K
a
f
k
a
,
 
f
a
n
n
e
d
 
t
o
 
b
i
l
l
i
n
g
 
/
 
f
r
a
u
d
 
/
 
E
T
A
 
/
 
s
u
r
g
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
 
U
b
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


 
 
 
 
 
 
 
 
U
b
e
r
 
i
s
 
i
n
t
e
r
e
s
t
i
n
g
 
b
e
c
a
u
s
e
 
i
t
&
r
s
q
u
o
;
s
 
a
 
r
e
a
l
-
t
i
m
e
 
m
a
t
c
h
i
n
g
 
s
y
s
t
e
m
,
 
n
o
t
 
a
 
C
R
U
D
 
a
p
p
.
 
E
v
e
r
y


 
 
 
 
 
 
 
 
c
o
m
p
o
n
e
n
t
 
t
o
u
c
h
e
s
 
g
e
o
 
a
n
d
 
m
o
s
t
 
a
r
e
 
a
s
y
n
c
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
 
L
i
v
e
 
m
a
p
 
d
i
s
p
a
t
c
h
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
M
A
P
_
W
 
=
 
6
0
0
;


c
o
n
s
t
 
M
A
P
_
H
 
=
 
3
6
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
 
D
r
i
v
e
r
P
o
s
 
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
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
b
u
s
y
:
 
b
o
o
l
e
a
n
;
 
}




c
o
n
s
t
 
I
N
I
T
I
A
L
_
D
R
I
V
E
R
S
:
 
D
r
i
v
e
r
P
o
s
[
]
 
=
 
[


 
 
{
 
i
d
:
 
1
,
 
x
:
 
1
0
0
,
 
y
:
 
9
0
,
 
b
u
s
y
:
 
f
a
l
s
e
 
}
,


 
 
{
 
i
d
:
 
2
,
 
x
:
 
2
0
0
,
 
y
:
 
2
0
0
,
 
b
u
s
y
:
 
f
a
l
s
e
 
}
,


 
 
{
 
i
d
:
 
3
,
 
x
:
 
3
2
0
,
 
y
:
 
1
3
0
,
 
b
u
s
y
:
 
f
a
l
s
e
 
}
,


 
 
{
 
i
d
:
 
4
,
 
x
:
 
4
0
0
,
 
y
:
 
2
7
0
,
 
b
u
s
y
:
 
f
a
l
s
e
 
}
,


 
 
{
 
i
d
:
 
5
,
 
x
:
 
4
8
0
,
 
y
:
 
1
0
0
,
 
b
u
s
y
:
 
f
a
l
s
e
 
}
,


 
 
{
 
i
d
:
 
6
,
 
x
:
 
5
5
0
,
 
y
:
 
2
2
0
,
 
b
u
s
y
:
 
f
a
l
s
e
 
}
,


 
 
{
 
i
d
:
 
7
,
 
x
:
 
2
5
0
,
 
y
:
 
3
1
0
,
 
b
u
s
y
:
 
f
a
l
s
e
 
}
,


]
;




t
y
p
e
 
P
h
a
s
e
 
=
 
"
i
d
l
e
"
 
|
 
"
s
e
a
r
c
h
i
n
g
"
 
|
 
"
o
f
f
e
r
e
d
"
 
|
 
"
m
a
t
c
h
e
d
"
 
|
 
"
e
n
r
o
u
t
e
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
 
D
i
s
p
a
t
c
h
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
d
r
i
v
e
r
s
,
 
s
e
t
D
r
i
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
D
r
i
v
e
r
P
o
s
[
]
>
(
I
N
I
T
I
A
L
_
D
R
I
V
E
R
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
i
d
e
r
,
 
s
e
t
R
i
d
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
{
 
x
:
 
2
8
0
,
 
y
:
 
2
0
0
 
}
)
;


 
 
c
o
n
s
t
 
[
p
h
a
s
e
,
 
s
e
t
P
h
a
s
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
P
h
a
s
e
>
(
"
i
d
l
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
l
e
c
t
e
d
D
r
i
v
e
r
I
d
,
 
s
e
t
S
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
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
n
u
m
b
e
r
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
c
o
n
s
t
 
S
E
A
R
C
H
_
R
A
D
I
U
S
 
=
 
1
4
0
;




 
 
c
o
n
s
t
 
n
e
a
r
b
y
D
r
i
v
e
r
s
 
=
 
d
r
i
v
e
r
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
d
)
 
=
>
 
{


 
 
 
 
i
f
 
(
d
.
b
u
s
y
)
 
r
e
t
u
r
n
 
f
a
l
s
e
;


 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
d
.
x
 
-
 
r
i
d
e
r
.
x
;


 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
d
.
y
 
-
 
r
i
d
e
r
.
y
;


 
 
 
 
r
e
t
u
r
n
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
 
<
=
 
S
E
A
R
C
H
_
R
A
D
I
U
S
;


 
 
}
)
;




 
 
c
o
n
s
t
 
r
e
q
u
e
s
t
T
r
i
p
 
=
 
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
p
h
a
s
e
 
!
=
=
 
"
i
d
l
e
"
)
 
r
e
t
u
r
n
;


 
 
 
 
s
e
t
P
h
a
s
e
(
"
s
e
a
r
c
h
i
n
g
"
)
;


 
 
 
 
/
/
 
A
f
t
e
r
 
8
0
0
m
s
,
 
s
c
o
r
e
 
n
e
a
r
b
y
 
d
r
i
v
e
r
s
 
a
n
d
 
p
i
c
k
 
t
h
e
 
c
l
o
s
e
s
t


 
 
 
 
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
 
{


 
 
 
 
 
 
i
f
 
(
n
e
a
r
b
y
D
r
i
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
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
i
d
l
e
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
c
o
n
s
t
 
c
l
o
s
e
s
t
 
=
 
n
e
a
r
b
y
D
r
i
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
d
)
 
=
>
 
(
{
 
d
,
 
d
i
s
t
:
 
M
a
t
h
.
s
q
r
t
(
(
d
.
x
 
-
 
r
i
d
e
r
.
x
)
 
*
*
 
2
 
+
 
(
d
.
y
 
-
 
r
i
d
e
r
.
y
)
 
*
*
 
2
)
 
}
)
)


 
 
 
 
 
 
 
 
.
s
o
r
t
(
(
a
,
 
b
)
 
=
>
 
a
.
d
i
s
t
 
-
 
b
.
d
i
s
t
)
[
0
]
.
d
;


 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
(
c
l
o
s
e
s
t
.
i
d
)
;


 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
o
f
f
e
r
e
d
"
)
;


 
 
 
 
 
 
/
/
 
D
r
i
v
e
r
 
a
c
c
e
p
t
s
 
a
f
t
e
r
 
1
s


 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
m
a
t
c
h
e
d
"
)
;


 
 
 
 
 
 
 
 
/
/
 
D
r
i
v
e
 
t
o
 
r
i
d
e
r


 
 
 
 
 
 
 
 
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
h
a
s
e
(
"
e
n
r
o
u
t
e
"
)
,
 
1
2
0
0
)
;


 
 
 
 
 
 
}
,
 
1
0
0
0
)
;


 
 
 
 
}
,
 
8
0
0
)
;


 
 
}
;




 
 
/
/
 
A
n
i
m
a
t
e
 
m
a
t
c
h
e
d
 
d
r
i
v
e
r
 
t
o
w
a
r
d
 
r
i
d
e
r


 
 
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
p
h
a
s
e
 
!
=
=
 
"
e
n
r
o
u
t
e
"
 
|
|
 
s
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
 
=
=
=
 
n
u
l
l
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
D
r
i
v
e
r
s
(
(
d
s
)
 
=
>
 
{


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
d
s
.
m
a
p
(
(
d
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
.
i
d
 
!
=
=
 
s
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
)
 
r
e
t
u
r
n
 
d
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
x
 
=
 
r
i
d
e
r
.
x
 
-
 
d
.
x
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
y
 
=
 
r
i
d
e
r
.
y
 
-
 
d
.
y
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
i
s
t
 
=
 
M
a
t
h
.
s
q
r
t
(
d
x
 
*
 
d
x
 
+
 
d
y
 
*
 
d
y
)
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
d
i
s
t
 
<
 
6
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
a
r
r
i
v
e
d


 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
h
a
s
e
(
"
i
d
l
e
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
D
r
i
v
e
r
s
(
(
q
s
)
 
=
>
 
q
s
.
m
a
p
(
(
q
)
 
=
>
 
(
q
.
i
d
 
=
=
=
 
s
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
 
?
 
{
 
.
.
.
q
,
 
b
u
s
y
:
 
t
r
u
e
 
}
 
:
 
q
)
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
(
n
u
l
l
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
,
 
6
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
 
{
 
.
.
.
d
,
 
x
:
 
r
i
d
e
r
.
x
,
 
y
:
 
r
i
d
e
r
.
y
 
}
;


 
 
 
 
 
 
 
 
 
 
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
d
,
 
x
:
 
d
.
x
 
+
 
(
d
x
 
/
 
d
i
s
t
)
 
*
 
4
,
 
y
:
 
d
.
y
 
+
 
(
d
y
 
/
 
d
i
s
t
)
 
*
 
4
 
}
;


 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,
 
6
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
h
a
s
e
,
 
s
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
,
 
r
i
d
e
r
]
)
;




 
 
c
o
n
s
t
 
m
o
v
e
R
i
d
e
r
 
=
 
(
e
:
 
R
e
a
c
t
.
M
o
u
s
e
E
v
e
n
t
<
S
V
G
S
V
G
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
i
f
 
(
p
h
a
s
e
 
!
=
=
 
"
i
d
l
e
"
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
 
r
e
c
t
 
=
 
(
e
.
c
u
r
r
e
n
t
T
a
r
g
e
t
 
a
s
 
S
V
G
S
V
G
E
l
e
m
e
n
t
)
.
g
e
t
B
o
u
n
d
i
n
g
C
l
i
e
n
t
R
e
c
t
(
)
;


 
 
 
 
c
o
n
s
t
 
x
 
=
 
(
(
e
.
c
l
i
e
n
t
X
 
-
 
r
e
c
t
.
l
e
f
t
)
 
/
 
r
e
c
t
.
w
i
d
t
h
)
 
*
 
M
A
P
_
W
;


 
 
 
 
c
o
n
s
t
 
y
 
=
 
(
(
e
.
c
l
i
e
n
t
Y
 
-
 
r
e
c
t
.
t
o
p
)
 
/
 
r
e
c
t
.
h
e
i
g
h
t
)
 
*
 
M
A
P
_
H
;


 
 
 
 
s
e
t
R
i
d
e
r
(
{
 
x
,
 
y
 
}
)
;


 
 
}
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
D
r
i
v
e
r
s
(
I
N
I
T
I
A
L
_
D
R
I
V
E
R
S
)
;


 
 
 
 
s
e
t
R
i
d
e
r
(
{
 
x
:
 
2
8
0
,
 
y
:
 
2
0
0
 
}
)
;


 
 
 
 
s
e
t
P
h
a
s
e
(
"
i
d
l
e
"
)
;


 
 
 
 
s
e
t
S
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
(
n
u
l
l
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
C
l
i
c
k
 
a
n
y
w
h
e
r
e
 
o
n
 
t
h
e
 
m
a
p
 
t
o
 
m
o
v
e
 
t
h
e
 
r
i
d
e
r
,
 
t
h
e
n
 
r
e
q
u
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


 
 
 
 
 
 
 
 
7
 
d
r
i
v
e
r
s
 
o
n
 
t
h
e
 
m
a
p
.
 
T
h
e
 
d
i
s
p
a
t
c
h
 
s
e
r
v
i
c
e
 
q
u
e
r
i
e
s
 
n
e
a
r
b
y
 
H
3
 
c
e
l
l
s
 
(
l
i
m
e
 
r
i
n
g
)
,
 
s
c
o
r
e
s


 
 
 
 
 
 
 
 
c
a
n
d
i
d
a
t
e
s
,
 
s
e
n
d
s
 
a
n
 
o
f
f
e
r
 
t
o
 
t
h
e
 
c
l
o
s
e
s
t
,
 
w
a
i
t
s
 
f
o
r
 
a
c
c
e
p
t
a
n
c
e
,
 
t
h
e
n
 
r
o
u
t
e
s
 
t
h
e
 
d
r
i
v
e
r


 
 
 
 
 
 
 
 
t
o
 
t
h
e
 
r
i
d
e
r
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
 
1
8
 
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
{
`
0
 
0
 
$
{
M
A
P
_
W
}
 
$
{
M
A
P
_
H
}
`
}


 
 
 
 
 
 
 
 
 
 
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
 
c
u
r
s
o
r
:
 
p
h
a
s
e
 
=
=
=
 
"
i
d
l
e
"
 
?
 
"
c
r
o
s
s
h
a
i
r
"
 
:
 
"
d
e
f
a
u
l
t
"
 
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
m
o
v
e
R
i
d
e
r
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
H
3
-
l
i
k
e
 
g
r
i
d
 
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
 
1
1
 
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
`
g
x
$
{
i
}
`
}
 
x
1
=
{
i
 
*
 
6
0
}
 
x
2
=
{
i
 
*
 
6
0
}
 
y
1
=
{
0
}
 
y
2
=
{
M
A
P
_
H
}
 
s
t
r
o
k
e
=
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


 
 
 
 
 
 
 
 
 
 
)
)
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
 
7
 
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
`
g
y
$
{
i
}
`
}
 
x
1
=
{
0
}
 
x
2
=
{
M
A
P
_
W
}
 
y
1
=
{
i
 
*
 
6
0
}
 
y
2
=
{
i
 
*
 
6
0
}
 
s
t
r
o
k
e
=
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


 
 
 
 
 
 
 
 
 
 
)
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
s
e
a
r
c
h
 
r
a
d
i
u
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
(
p
h
a
s
e
 
=
=
=
 
"
s
e
a
r
c
h
i
n
g
"
 
|
|
 
p
h
a
s
e
 
=
=
=
 
"
o
f
f
e
r
e
d
"
)
 
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
r
i
d
e
r
.
x
}
 
c
y
=
{
r
i
d
e
r
.
y
}
 
r
=
{
S
E
A
R
C
H
_
R
A
D
I
U
S
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
 
f
i
l
l
O
p
a
c
i
t
y
=
{
0
.
0
8
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
6
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
d
r
i
v
e
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
d
r
i
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
d
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
S
e
l
e
c
t
e
d
 
=
 
d
.
i
d
 
=
=
=
 
s
e
l
e
c
t
e
d
D
r
i
v
e
r
I
d
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
s
S
e
l
e
c
t
e
d
 
?
 
S
D
 
:
 
d
.
b
u
s
y
 
?
 
N
E
U
T
R
A
L
 
:
 
"
#
f
f
f
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
m
o
t
i
o
n
.
g
 
k
e
y
=
{
d
.
i
d
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
 
x
:
 
d
.
x
,
 
y
:
 
d
.
y
 
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
0
6
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
0
}
 
c
y
=
{
0
}
 
r
=
{
i
s
S
e
l
e
c
t
e
d
 
?
 
1
2
 
:
 
8
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
c
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
c
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
r
 
w
i
d
t
h
=
{
i
s
S
e
l
e
c
t
e
d
 
?
 
1
4
 
:
 
1
1
}
 
h
e
i
g
h
t
=
{
i
s
S
e
l
e
c
t
e
d
 
?
 
1
4
 
:
 
1
1
}
 
x
=
{
i
s
S
e
l
e
c
t
e
d
 
?
 
-
7
 
:
 
-
5
.
5
}
 
y
=
{
i
s
S
e
l
e
c
t
e
d
 
?
 
-
7
 
:
 
-
5
.
5
}
 
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
 
c
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
S
e
l
e
c
t
e
d
 
&
&
 
p
h
a
s
e
 
=
=
=
 
"
o
f
f
e
r
e
d
"
 
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
c
i
r
c
l
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
 
r
:
 
1
2
,
 
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
5
 
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
 
r
:
 
2
2
,
 
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
 
1
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
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
x
=
{
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
y
=
{
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
n
o
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
.
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
r
i
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
g
 
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
 
x
:
 
r
i
d
e
r
.
x
,
 
y
:
 
r
i
d
e
r
.
y
 
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
8
 
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
c
i
r
c
l
e
 
r
=
{
1
4
}
 
c
x
=
{
0
}
 
c
y
=
{
0
}
 
f
i
l
l
=
{
W
A
R
N
}
 
f
i
l
l
O
p
a
c
i
t
y
=
{
0
.
1
5
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
 
1
.
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
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,
 
r
e
p
e
a
t
T
y
p
e
:
 
"
r
e
v
e
r
s
e
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
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
0
}
 
c
y
=
{
0
}
 
r
=
{
9
}
 
f
i
l
l
=
{
W
A
R
N
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
2
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
i
n
 
w
i
d
t
h
=
{
1
1
}
 
h
e
i
g
h
t
=
{
1
1
}
 
x
=
{
-
5
.
5
}
 
y
=
{
-
5
.
5
}
 
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
0
b
1
2
2
0
"
 
}
}
 
/
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
g
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
S
t
a
t
u
s
 
t
e
x
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
M
A
P
_
W
 
/
 
2
}
 
y
=
{
2
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
2
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
p
h
a
s
e
 
=
=
=
 
"
i
d
l
e
"
 
&
&
 
"
c
l
i
c
k
 
o
n
 
t
h
e
 
m
a
p
 
t
o
 
m
o
v
e
 
r
i
d
e
r
 
·
 
t
h
e
n
 
r
e
q
u
e
s
t
 
a
 
t
r
i
p
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
s
e
a
r
c
h
i
n
g
"
 
&
&
 
`
s
e
a
r
c
h
i
n
g
 
$
{
n
e
a
r
b
y
D
r
i
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
}
 
n
e
a
r
b
y
 
d
r
i
v
e
r
s
…
`
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
o
f
f
e
r
e
d
"
 
&
&
 
"
t
r
i
p
 
o
f
f
e
r
e
d
 
t
o
 
c
l
o
s
e
s
t
 
d
r
i
v
e
r
…
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
m
a
t
c
h
e
d
"
 
&
&
 
"
m
a
t
c
h
e
d
 
·
 
d
r
i
v
e
r
 
e
n
 
r
o
u
t
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
{
p
h
a
s
e
 
=
=
=
 
"
e
n
r
o
u
t
e
"
 
&
&
 
"
d
r
i
v
e
r
 
e
n
 
r
o
u
t
e
…
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
s
v
g
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
3
 
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
p
h
a
s
e
"
 
v
a
l
u
e
=
{
p
h
a
s
e
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
 
c
o
l
o
r
=
{
p
h
a
s
e
 
=
=
=
 
"
i
d
l
e
"
 
?
 
N
E
U
T
R
A
L
 
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
n
e
a
r
b
y
 
d
r
i
v
e
r
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
n
e
a
r
b
y
D
r
i
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
u
s
y
 
d
r
i
v
e
r
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
d
r
i
v
e
r
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
d
)
 
=
>
 
d
.
b
u
s
y
)
.
l
e
n
g
t
h
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
r
e
q
u
e
s
t
T
r
i
p
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
h
a
s
e
 
!
=
=
 
"
i
d
l
e
"
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
h
a
s
e
 
!
=
=
 
"
i
d
l
e
"
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
M
a
p
P
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
q
u
e
s
t
 
t
r
i
p


 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
U
N
D
E
R
 
T
H
E
 
H
O
O
D


 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
s
e
a
r
c
h
 
r
a
d
i
u
s
 
q
u
e
r
i
e
s
 
R
e
d
i
s
 
f
o
r
 
a
l
l
 
d
r
i
v
e
r
s
 
i
n
 
t
h
e
 
r
i
d
e
r
&
r
s
q
u
o
;
s
 
H
3
 
c
e
l
l
 
+
 
6
 
n
e
i
g
h
b
o
r


 
 
 
 
 
 
 
 
 
 
r
i
n
g
s
.
 
C
a
n
d
i
d
a
t
e
s
 
a
r
e
 
s
c
o
r
e
d
 
o
n
 
d
i
s
t
a
n
c
e
 
+
 
E
T
A
 
+
 
d
r
i
v
e
r
 
s
c
o
r
e
.
 
T
o
p
 
c
a
n
d
i
d
a
t
e
 
g
e
t
s
 
a


 
 
 
 
 
 
 
 
 
 
p
u
s
h
 
o
f
f
e
r
;
 
o
n
 
a
c
c
e
p
t
,
 
t
h
e
 
t
r
i
p
 
f
l
i
p
s
 
t
o
 
m
a
t
c
h
e
d
 
a
n
d
 
t
h
e
 
l
i
f
e
c
y
c
l
e
 
c
o
n
t
i
n
u
e
s
 
t
h
r
o
u
g
h


 
 
 
 
 
 
 
 
 
 
K
a
f
k
a
 
e
v
e
n
t
s
 
t
o
 
b
i
l
l
i
n
g
,
 
E
T
A
,
 
a
n
d
 
a
n
a
l
y
t
i
c
s
 
s
e
r
v
i
c
e
s
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
 
O
n
e
 
t
r
i
p
 
=
 
m
a
n
y
 
s
e
r
v
i
c
e
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
 
S
E
R
V
I
C
E
S
 
=
 
[


 
 
{
 
k
:
 
"
D
i
s
p
a
t
c
h
"
,
 
v
:
 
"
M
a
t
c
h
e
s
 
r
i
d
e
r
 
t
o
 
d
r
i
v
e
r
.
 
R
e
a
d
s
 
d
r
i
v
e
r
 
l
o
c
a
t
i
o
n
s
 
f
r
o
m
 
R
e
d
i
s
,
 
s
c
o
r
e
s
 
c
a
n
d
i
d
a
t
e
s
.
"
 
}
,


 
 
{
 
k
:
 
"
L
o
c
a
t
i
o
n
 
s
t
r
e
a
m
"
,
 
v
:
 
"
I
n
g
e
s
t
s
 
4
-
s
e
c
o
n
d
 
p
i
n
g
s
 
f
r
o
m
 
e
v
e
r
y
 
d
r
i
v
e
r
.
 
U
p
d
a
t
e
s
 
R
e
d
i
s
 
c
e
l
l
 
i
n
d
e
x
.
"
 
}
,


 
 
{
 
k
:
 
"
T
r
i
p
 
s
e
r
v
i
c
e
"
,
 
v
:
 
"
O
w
n
s
 
t
h
e
 
t
r
i
p
 
s
t
a
t
e
 
m
a
c
h
i
n
e
 
i
n
 
P
o
s
t
g
r
e
s
.
 
E
m
i
t
s
 
s
t
a
t
e
-
c
h
a
n
g
e
 
e
v
e
n
t
s
 
t
o
 
K
a
f
k
a
.
"
 
}
,


 
 
{
 
k
:
 
"
E
T
A
 
s
e
r
v
i
c
e
"
,
 
v
:
 
"
C
o
n
s
u
m
e
s
 
l
o
c
a
t
i
o
n
 
p
i
n
g
s
,
 
p
r
e
d
i
c
t
s
 
E
T
A
,
 
s
u
r
f
a
c
e
s
 
b
a
c
k
 
t
o
 
r
i
d
e
r
 
a
p
p
.
"
 
}
,


 
 
{
 
k
:
 
"
P
r
i
c
i
n
g
 
/
 
s
u
r
g
e
"
,
 
v
:
 
"
W
a
t
c
h
e
s
 
s
u
p
p
l
y
/
d
e
m
a
n
d
 
p
e
r
 
c
e
l
l
,
 
d
e
c
i
d
e
s
 
m
u
l
t
i
p
l
i
e
r
s
.
 
R
u
n
s
 
a
 
K
a
f
k
a
 
s
t
r
e
a
m
 
j
o
b
.
"
 
}
,


 
 
{
 
k
:
 
"
P
a
y
m
e
n
t
s
"
,
 
v
:
 
"
C
o
n
s
u
m
e
s
 
'
t
r
i
p
_
e
n
d
e
d
'
 
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
t
l
e
s
 
f
a
r
e
 
w
i
t
h
 
P
S
P
.
 
I
d
e
m
p
o
t
e
n
c
y
-
k
e
y
e
d
.
"
 
}
,


 
 
{
 
k
:
 
"
F
r
a
u
d
"
,
 
v
:
 
"
S
t
r
e
a
m
 
j
o
b
 
w
a
t
c
h
e
s
 
f
o
r
 
a
n
o
m
a
l
i
e
s
 
(
5
 
t
r
i
p
s
 
i
n
 
5
 
m
i
n
,
 
s
p
o
o
f
e
d
 
G
P
S
,
 
e
t
c
.
)
.
 
F
l
a
g
s
 
t
r
i
p
s
.
"
 
}
,


 
 
{
 
k
:
 
"
A
n
a
l
y
t
i
c
s
"
,
 
v
:
 
"
E
v
e
r
y
 
e
v
e
n
t
 
a
l
s
o
 
g
o
e
s
 
t
o
 
a
 
d
a
t
a
 
w
a
r
e
h
o
u
s
e
 
v
i
a
 
C
D
C
 
f
o
r
 
r
e
p
o
r
t
i
n
g
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
 
S
e
r
v
i
c
e
M
a
p
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
 
t
r
i
p
 
t
o
u
c
h
e
s
 
e
i
g
h
t
 
s
e
r
v
i
c
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
 
d
i
s
p
a
t
c
h
 
a
n
i
m
a
t
i
o
n
 
i
s
 
j
u
s
t
 
t
h
e
 
f
r
o
n
t
 
e
n
d
.
 
T
h
e
 
b
a
c
k
b
o
n
e
 
i
s
 
e
v
e
n
t
-
d
r
i
v
e
n
 
—
 
e
v
e
r
y


 
 
 
 
 
 
 
 
s
t
a
t
e
 
c
h
a
n
g
e
 
e
m
i
t
s
 
a
n
 
e
v
e
n
t
,
 
a
n
d
 
a
 
c
o
n
s
t
e
l
l
a
t
i
o
n
 
o
f
 
s
e
r
v
i
c
e
s
 
r
e
a
c
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
S
E
R
V
I
C
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
U
b
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
m
a
p
"
,
 
l
a
b
e
l
:
 
"
L
i
v
e
 
D
i
s
p
a
t
c
h
"
,
 
i
c
o
n
:
 
<
M
a
p
P
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
p
a
t
c
h
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
s
e
r
v
i
c
e
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
S
e
r
v
i
c
e
 
M
a
p
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
S
e
r
v
i
c
e
M
a
p
 
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
 
U
b
e
r
 
u
s
e
 
H
3
 
h
e
x
a
g
o
n
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
 
g
e
o
h
a
s
h
 
r
e
c
t
a
n
g
l
e
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
H
e
x
a
g
o
n
s
 
l
o
o
k
 
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
H
e
x
 
c
e
l
l
s
 
h
a
v
e
 
6
 
e
q
u
i
d
i
s
t
a
n
t
 
n
e
i
g
h
b
o
r
s
 
—
 
u
n
i
f
o
r
m
 
n
e
i
g
h
b
o
r
 
d
i
s
t
a
n
c
e
 
i
s
 
i
m
p
o
r
t
a
n
t
 
f
o
r
 
f
a
i
r
 
s
u
r
g
e
 
z
o
n
e
s
 
a
n
d
 
a
c
c
u
r
a
t
e
 
E
T
A
s
.
"
,


 
 
 
 
 
 
 
 
"
H
e
x
 
c
o
m
p
r
e
s
s
e
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
 
t
h
e
 
G
P
S
 
s
p
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
G
e
o
h
a
s
h
 
r
e
c
t
a
n
g
l
e
s
 
h
a
v
e
 
8
 
n
e
i
g
h
b
o
r
s
 
a
t
 
v
a
r
y
i
n
g
 
d
i
s
t
a
n
c
e
s
,
 
w
h
i
c
h
 
c
a
u
s
e
s
 
w
e
i
r
d
 
a
r
t
i
f
a
c
t
s
 
i
n
 
d
i
s
p
a
t
c
h
 
m
a
t
h
.
 
H
3
'
s
 
h
e
x
a
g
o
n
a
l
 
t
e
s
s
e
l
l
a
t
i
o
n
 
g
i
v
e
s
 
6
 
e
q
u
i
d
i
s
t
a
n
t
 
n
e
i
g
h
b
o
r
s
 
a
n
d
 
c
l
e
a
n
 
n
e
s
t
i
n
g
 
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
 
r
e
s
o
l
u
t
i
o
n
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
 
t
h
e
 
t
r
i
p
 
l
i
f
e
c
y
c
l
e
 
e
v
e
n
t
-
d
r
i
v
e
n
 
(
K
a
f
k
a
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
 
c
a
l
l
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
A
 
t
r
i
p
 
t
o
u
c
h
e
s
 
8
+
 
s
e
r
v
i
c
e
s
.
 
S
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
 
c
h
a
i
n
s
 
w
o
u
l
d
 
b
e
 
b
r
i
t
t
l
e
 
a
n
d
 
s
l
o
w
.
 
E
v
e
n
t
s
 
l
e
t
 
e
a
c
h
 
s
e
r
v
i
c
e
 
r
e
a
c
t
 
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
 
a
n
d
 
s
c
a
l
e
 
o
n
 
i
t
s
 
o
w
n
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
 
t
o
 
l
i
c
e
n
s
e
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
 
A
W
S
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
 
=
 
t
i
g
h
t
 
c
o
u
p
l
i
n
g
,
 
s
l
o
w
 
c
h
e
c
k
o
u
t
,
 
c
a
s
c
a
d
i
n
g
 
f
a
i
l
u
r
e
s
.
 
E
v
e
n
t
s
 
l
e
t
 
b
i
l
l
i
n
g
,
 
f
r
a
u
d
,
 
a
n
a
l
y
t
i
c
s
,
 
E
T
A
 
a
l
l
 
c
o
n
s
u
m
e
 
t
h
e
 
s
a
m
e
 
t
r
i
p
 
s
t
a
t
e
 
c
h
a
n
g
e
s
 
w
i
t
h
o
u
t
 
t
h
e
 
t
r
i
p
 
s
e
r
v
i
c
e
 
e
v
e
n
 
k
n
o
w
i
n
g
 
t
h
e
y
 
e
x
i
s
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
D
r
i
v
e
r
 
l
o
c
a
t
i
o
n
 
u
p
d
a
t
e
s
 
c
o
m
e
 
e
v
e
r
y
 
4
 
s
e
c
o
n
d
s
.
 
W
i
t
h
 
5
M
 
a
c
t
i
v
e
 
d
r
i
v
e
r
s
,
 
w
h
a
t
'
s
 
t
h
e
 
l
o
c
a
t
i
o
n
-
u
p
d
a
t
e
 
r
a
t
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
1
k
/
s
e
c
"
,
 
"
A
b
o
u
t
 
1
.
2
5
M
/
s
e
c
"
,
 
"
1
0
0
/
s
e
c
"
,
 
"
1
0
M
/
s
e
c
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
5
M
 
/
 
4
s
 
=
 
1
.
2
5
M
 
l
o
c
a
t
i
o
n
 
u
p
d
a
t
e
s
/
s
e
c
.
 
T
h
i
s
 
i
s
 
w
h
y
 
l
o
c
a
t
i
o
n
s
 
l
i
v
e
 
i
n
 
R
e
d
i
s
 
(
s
h
a
r
d
e
d
 
b
y
 
H
3
 
c
e
l
l
)
,
 
n
o
t
 
i
n
 
P
o
s
t
g
r
e
s
.
 
T
h
e
 
h
o
t
 
w
r
i
t
e
 
p
a
t
h
 
c
a
n
'
t
 
b
e
 
a
 
t
r
a
n
s
a
c
t
i
o
n
a
l
 
D
B
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
 
d
r
i
v
e
r
 
d
i
s
c
o
n
n
e
c
t
s
 
m
i
d
-
t
r
i
p
 
(
l
o
s
t
 
s
i
g
n
a
l
)
.
 
B
e
s
t
 
s
y
s
t
e
m
 
r
e
s
p
o
n
s
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
C
a
n
c
e
l
 
t
h
e
 
t
r
i
p
.
"
,


 
 
 
 
 
 
 
 
"
H
o
l
d
 
t
h
e
 
t
r
i
p
 
i
n
 
'
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
 
l
o
s
t
'
 
s
t
a
t
e
,
 
r
e
t
r
y
 
G
P
S
 
p
i
n
g
s
,
 
o
n
l
y
 
m
a
r
k
 
i
t
 
f
a
i
l
e
d
 
a
f
t
e
r
 
a
 
t
i
m
e
o
u
t
.
 
A
p
p
 
s
h
o
w
s
 
a
 
'
r
e
c
o
n
n
e
c
t
i
n
g
'
 
U
I
.
"
,


 
 
 
 
 
 
 
 
"
C
h
a
r
g
e
 
t
h
e
 
r
i
d
e
r
.
"
,


 
 
 
 
 
 
 
 
"
C
r
a
s
h
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
N
e
t
w
o
r
k
 
b
l
i
p
s
 
h
a
p
p
e
n
 
i
n
 
c
a
r
s
 
c
o
n
s
t
a
n
t
l
y
 
(
t
u
n
n
e
l
s
,
 
b
a
s
e
m
e
n
t
s
)
.
 
T
o
l
e
r
a
t
e
 
b
r
i
e
f
 
d
i
s
c
o
n
n
e
c
t
s
 
w
i
t
h
 
a
 
s
t
a
t
e
 
a
n
d
 
a
 
t
i
m
e
o
u
t
,
 
n
o
t
 
a
n
 
i
m
m
e
d
i
a
t
e
 
f
a
i
l
.
 
T
h
e
 
t
r
i
p
 
s
e
r
v
i
c
e
'
s
 
s
t
a
t
e
 
m
a
c
h
i
n
e
 
h
a
s
 
e
x
p
l
i
c
i
t
 
'
u
n
k
n
o
w
n
'
 
/
 
'
r
e
c
o
n
n
e
c
t
i
n
g
'
 
s
t
a
t
e
s
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
 
U
b
e
r
 
D
i
s
p
a
t
c
h
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
3
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
 
c
l
a
s
s
i
c
 
'
d
e
s
i
g
n
 
U
b
e
r
 
/
 
L
y
f
t
 
/
 
D
o
o
r
D
a
s
h
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




