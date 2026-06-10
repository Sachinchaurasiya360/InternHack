
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
,
 
C
o
p
y
 
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
 
u
s
e
C
o
p
y
T
o
C
l
i
p
b
o
a
r
d
 
}
 
f
r
o
m
 
"
@
/
h
o
o
k
s
/
u
s
e
C
o
p
y
T
o
C
l
i
p
b
o
a
r
d
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
 
C
o
p
y
B
u
t
t
o
n
P
r
o
p
s
 
{


 
 
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


 
 
c
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
;


}




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
 
C
o
p
y
B
u
t
t
o
n
(
{
 
t
e
x
t
,
 
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
"
 
}
:
 
C
o
p
y
B
u
t
t
o
n
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
{
 
c
o
p
i
e
d
,
 
c
o
p
y
 
}
 
=
 
u
s
e
C
o
p
y
T
o
C
l
i
p
b
o
a
r
d
(
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
b
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
(
)
 
=
>
 
c
o
p
y
(
t
e
x
t
)
}


 
 
 
 
 
 
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
{
c
o
p
i
e
d
 
?
 
"
C
o
p
i
e
d
!
"
 
:
 
"
C
o
p
y
 
t
o
 
c
l
i
p
b
o
a
r
d
"
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
1
.
5
 
t
e
x
t
-
s
m
 
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
 
d
u
r
a
t
i
o
n
-
2
0
0


 
 
 
 
 
 
 
 
$
{
c
o
p
i
e
d


 
 
 
 
 
 
 
 
 
 
?
 
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
/
1
0
 
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
g
r
e
e
n
-
5
0
0
/
2
0
"


 
 
 
 
 
 
 
 
 
 
:
 
"
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
 
t
e
x
t
-
g
r
a
y
-
4
0
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
w
h
i
t
e
 
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
/
1
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
"


 
 
 
 
 
 
 
 
}
 
$
{
c
l
a
s
s
N
a
m
e
}
`
}


 
 
 
 
>


 
 
 
 
 
 
{
c
o
p
i
e
d
 
?
 
<
C
h
e
c
k
 
s
i
z
e
=
{
1
4
}
 
/
>
 
:
 
<
C
o
p
y
 
s
i
z
e
=
{
1
4
}
 
/
>
}


 
 
 
 
 
 
<
s
p
a
n
>
{
c
o
p
i
e
d
 
?
 
"
C
o
p
i
e
d
!
"
 
:
 
"
C
o
p
y
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


